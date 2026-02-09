"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface DoctorImageProps extends Omit<ImageProps, "src" | "onError"> {
    src?: string | null; // Allow src to be null or undefined
    fallbackSrc?: string;
}

export default function DoctorImage({
    src,
    alt,
    fallbackSrc = "/images/doctor-fallback.png",
    ...props
}: DoctorImageProps) {
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [lastSrc, setLastSrc] = useState<string | null | undefined>(src);

    // Reset state if src changes
    if (src !== lastSrc) {
        setLastSrc(src);
        setImgSrc(null);
    }

    const handleError = () => {
        // Only set fallback if we aren't already using it to avoid loops (though unlikely here)
        if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
        }
    };

    // Logic:
    // 1. If we have an overload imgSrc (from error), use that.
    // 2. Else if src prop is valid string, use that.
    // 3. Else use fallbackSrc.
    const finalSrc = imgSrc || (src && src.trim() !== "" ? src : fallbackSrc);

    return (
        <Image
            {...props}
            src={finalSrc}
            alt={alt}
            onError={handleError}
        />
    );
}

