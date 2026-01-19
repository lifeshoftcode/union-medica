
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model CommitteeMember
 * 
 */
export type CommitteeMember = $Result.DefaultSelection<Prisma.$CommitteeMemberPayload>
/**
 * Model StaffMember
 * 
 */
export type StaffMember = $Result.DefaultSelection<Prisma.$StaffMemberPayload>
/**
 * Model ContentBlock
 * 
 */
export type ContentBlock = $Result.DefaultSelection<Prisma.$ContentBlockPayload>
/**
 * Model ResearchPublication
 * 
 */
export type ResearchPublication = $Result.DefaultSelection<Prisma.$ResearchPublicationPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Doctors
 * const doctors = await prisma.doctor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Doctors
   * const doctors = await prisma.doctor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.committeeMember`: Exposes CRUD operations for the **CommitteeMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommitteeMembers
    * const committeeMembers = await prisma.committeeMember.findMany()
    * ```
    */
  get committeeMember(): Prisma.CommitteeMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffMember`: Exposes CRUD operations for the **StaffMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffMembers
    * const staffMembers = await prisma.staffMember.findMany()
    * ```
    */
  get staffMember(): Prisma.StaffMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentBlock`: Exposes CRUD operations for the **ContentBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentBlocks
    * const contentBlocks = await prisma.contentBlock.findMany()
    * ```
    */
  get contentBlock(): Prisma.ContentBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.researchPublication`: Exposes CRUD operations for the **ResearchPublication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchPublications
    * const researchPublications = await prisma.researchPublication.findMany()
    * ```
    */
  get researchPublication(): Prisma.ResearchPublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Doctor: 'Doctor',
    CommitteeMember: 'CommitteeMember',
    StaffMember: 'StaffMember',
    ContentBlock: 'ContentBlock',
    ResearchPublication: 'ResearchPublication',
    Service: 'Service'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "doctor" | "committeeMember" | "staffMember" | "contentBlock" | "researchPublication" | "service"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      CommitteeMember: {
        payload: Prisma.$CommitteeMemberPayload<ExtArgs>
        fields: Prisma.CommitteeMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommitteeMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommitteeMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          findFirst: {
            args: Prisma.CommitteeMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommitteeMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          findMany: {
            args: Prisma.CommitteeMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>[]
          }
          create: {
            args: Prisma.CommitteeMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          createMany: {
            args: Prisma.CommitteeMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommitteeMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>[]
          }
          delete: {
            args: Prisma.CommitteeMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          update: {
            args: Prisma.CommitteeMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          deleteMany: {
            args: Prisma.CommitteeMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommitteeMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommitteeMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>[]
          }
          upsert: {
            args: Prisma.CommitteeMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          aggregate: {
            args: Prisma.CommitteeMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommitteeMember>
          }
          groupBy: {
            args: Prisma.CommitteeMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommitteeMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommitteeMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CommitteeMemberCountAggregateOutputType> | number
          }
        }
      }
      StaffMember: {
        payload: Prisma.$StaffMemberPayload<ExtArgs>
        fields: Prisma.StaffMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          findFirst: {
            args: Prisma.StaffMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          findMany: {
            args: Prisma.StaffMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          create: {
            args: Prisma.StaffMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          createMany: {
            args: Prisma.StaffMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          delete: {
            args: Prisma.StaffMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          update: {
            args: Prisma.StaffMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          deleteMany: {
            args: Prisma.StaffMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          upsert: {
            args: Prisma.StaffMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          aggregate: {
            args: Prisma.StaffMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffMember>
          }
          groupBy: {
            args: Prisma.StaffMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffMemberCountArgs<ExtArgs>
            result: $Utils.Optional<StaffMemberCountAggregateOutputType> | number
          }
        }
      }
      ContentBlock: {
        payload: Prisma.$ContentBlockPayload<ExtArgs>
        fields: Prisma.ContentBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          findFirst: {
            args: Prisma.ContentBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          findMany: {
            args: Prisma.ContentBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>[]
          }
          create: {
            args: Prisma.ContentBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          createMany: {
            args: Prisma.ContentBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>[]
          }
          delete: {
            args: Prisma.ContentBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          update: {
            args: Prisma.ContentBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          deleteMany: {
            args: Prisma.ContentBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>[]
          }
          upsert: {
            args: Prisma.ContentBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          aggregate: {
            args: Prisma.ContentBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentBlock>
          }
          groupBy: {
            args: Prisma.ContentBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentBlockCountArgs<ExtArgs>
            result: $Utils.Optional<ContentBlockCountAggregateOutputType> | number
          }
        }
      }
      ResearchPublication: {
        payload: Prisma.$ResearchPublicationPayload<ExtArgs>
        fields: Prisma.ResearchPublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResearchPublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResearchPublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>
          }
          findFirst: {
            args: Prisma.ResearchPublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResearchPublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>
          }
          findMany: {
            args: Prisma.ResearchPublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>[]
          }
          create: {
            args: Prisma.ResearchPublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>
          }
          createMany: {
            args: Prisma.ResearchPublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResearchPublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>[]
          }
          delete: {
            args: Prisma.ResearchPublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>
          }
          update: {
            args: Prisma.ResearchPublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>
          }
          deleteMany: {
            args: Prisma.ResearchPublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResearchPublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResearchPublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>[]
          }
          upsert: {
            args: Prisma.ResearchPublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchPublicationPayload>
          }
          aggregate: {
            args: Prisma.ResearchPublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResearchPublication>
          }
          groupBy: {
            args: Prisma.ResearchPublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResearchPublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResearchPublicationCountArgs<ExtArgs>
            result: $Utils.Optional<ResearchPublicationCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    doctor?: DoctorOmit
    committeeMember?: CommitteeMemberOmit
    staffMember?: StaffMemberOmit
    contentBlock?: ContentBlockOmit
    researchPublication?: ResearchPublicationOmit
    service?: ServiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
    externalId: number | null
    rating: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
    externalId: number | null
    rating: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    externalId: number | null
    name: string | null
    title: string | null
    specialty: string | null
    image: string | null
    rating: number | null
    phone: string | null
    insurance: boolean | null
    telemedicine: boolean | null
    location: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    externalId: number | null
    name: string | null
    title: string | null
    specialty: string | null
    image: string | null
    rating: number | null
    phone: string | null
    insurance: boolean | null
    telemedicine: boolean | null
    location: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    externalId: number
    name: number
    title: number
    specialty: number
    image: number
    rating: number
    phone: number
    insurance: number
    telemedicine: number
    location: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
    externalId?: true
    rating?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
    externalId?: true
    rating?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    title?: true
    specialty?: true
    image?: true
    rating?: true
    phone?: true
    insurance?: true
    telemedicine?: true
    location?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    title?: true
    specialty?: true
    image?: true
    rating?: true
    phone?: true
    insurance?: true
    telemedicine?: true
    location?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    title?: true
    specialty?: true
    image?: true
    rating?: true
    phone?: true
    insurance?: true
    telemedicine?: true
    location?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    externalId: number
    name: string
    title: string | null
    specialty: string
    image: string | null
    rating: number | null
    phone: string | null
    insurance: boolean
    telemedicine: boolean
    location: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    title?: boolean
    specialty?: boolean
    image?: boolean
    rating?: boolean
    phone?: boolean
    insurance?: boolean
    telemedicine?: boolean
    location?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    title?: boolean
    specialty?: boolean
    image?: boolean
    rating?: boolean
    phone?: boolean
    insurance?: boolean
    telemedicine?: boolean
    location?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    title?: boolean
    specialty?: boolean
    image?: boolean
    rating?: boolean
    phone?: boolean
    insurance?: boolean
    telemedicine?: boolean
    location?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    externalId?: boolean
    name?: boolean
    title?: boolean
    specialty?: boolean
    image?: boolean
    rating?: boolean
    phone?: boolean
    insurance?: boolean
    telemedicine?: boolean
    location?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "name" | "title" | "specialty" | "image" | "rating" | "phone" | "insurance" | "telemedicine" | "location" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      externalId: number
      name: string
      title: string | null
      specialty: string
      image: string | null
      rating: number | null
      phone: string | null
      insurance: boolean
      telemedicine: boolean
      location: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly externalId: FieldRef<"Doctor", 'Int'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly title: FieldRef<"Doctor", 'String'>
    readonly specialty: FieldRef<"Doctor", 'String'>
    readonly image: FieldRef<"Doctor", 'String'>
    readonly rating: FieldRef<"Doctor", 'Float'>
    readonly phone: FieldRef<"Doctor", 'String'>
    readonly insurance: FieldRef<"Doctor", 'Boolean'>
    readonly telemedicine: FieldRef<"Doctor", 'Boolean'>
    readonly location: FieldRef<"Doctor", 'String'>
    readonly active: FieldRef<"Doctor", 'Boolean'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
  }


  /**
   * Model CommitteeMember
   */

  export type AggregateCommitteeMember = {
    _count: CommitteeMemberCountAggregateOutputType | null
    _avg: CommitteeMemberAvgAggregateOutputType | null
    _sum: CommitteeMemberSumAggregateOutputType | null
    _min: CommitteeMemberMinAggregateOutputType | null
    _max: CommitteeMemberMaxAggregateOutputType | null
  }

  export type CommitteeMemberAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type CommitteeMemberSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type CommitteeMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    image: string | null
    bio: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommitteeMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    image: string | null
    bio: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommitteeMemberCountAggregateOutputType = {
    id: number
    name: number
    role: number
    image: number
    bio: number
    order: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommitteeMemberAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type CommitteeMemberSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type CommitteeMemberMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    image?: true
    bio?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommitteeMemberMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    image?: true
    bio?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommitteeMemberCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    image?: true
    bio?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommitteeMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommitteeMember to aggregate.
     */
    where?: CommitteeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeMembers to fetch.
     */
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommitteeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommitteeMembers
    **/
    _count?: true | CommitteeMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommitteeMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommitteeMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommitteeMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommitteeMemberMaxAggregateInputType
  }

  export type GetCommitteeMemberAggregateType<T extends CommitteeMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCommitteeMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommitteeMember[P]>
      : GetScalarType<T[P], AggregateCommitteeMember[P]>
  }




  export type CommitteeMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeMemberWhereInput
    orderBy?: CommitteeMemberOrderByWithAggregationInput | CommitteeMemberOrderByWithAggregationInput[]
    by: CommitteeMemberScalarFieldEnum[] | CommitteeMemberScalarFieldEnum
    having?: CommitteeMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommitteeMemberCountAggregateInputType | true
    _avg?: CommitteeMemberAvgAggregateInputType
    _sum?: CommitteeMemberSumAggregateInputType
    _min?: CommitteeMemberMinAggregateInputType
    _max?: CommitteeMemberMaxAggregateInputType
  }

  export type CommitteeMemberGroupByOutputType = {
    id: number
    name: string
    role: string
    image: string | null
    bio: string | null
    order: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CommitteeMemberCountAggregateOutputType | null
    _avg: CommitteeMemberAvgAggregateOutputType | null
    _sum: CommitteeMemberSumAggregateOutputType | null
    _min: CommitteeMemberMinAggregateOutputType | null
    _max: CommitteeMemberMaxAggregateOutputType | null
  }

  type GetCommitteeMemberGroupByPayload<T extends CommitteeMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommitteeMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommitteeMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommitteeMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CommitteeMemberGroupByOutputType[P]>
        }
      >
    >


  export type CommitteeMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    image?: boolean
    bio?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["committeeMember"]>

  export type CommitteeMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    image?: boolean
    bio?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["committeeMember"]>

  export type CommitteeMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    image?: boolean
    bio?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["committeeMember"]>

  export type CommitteeMemberSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    image?: boolean
    bio?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommitteeMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "image" | "bio" | "order" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["committeeMember"]>

  export type $CommitteeMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommitteeMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      role: string
      image: string | null
      bio: string | null
      order: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["committeeMember"]>
    composites: {}
  }

  type CommitteeMemberGetPayload<S extends boolean | null | undefined | CommitteeMemberDefaultArgs> = $Result.GetResult<Prisma.$CommitteeMemberPayload, S>

  type CommitteeMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommitteeMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommitteeMemberCountAggregateInputType | true
    }

  export interface CommitteeMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommitteeMember'], meta: { name: 'CommitteeMember' } }
    /**
     * Find zero or one CommitteeMember that matches the filter.
     * @param {CommitteeMemberFindUniqueArgs} args - Arguments to find a CommitteeMember
     * @example
     * // Get one CommitteeMember
     * const committeeMember = await prisma.committeeMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommitteeMemberFindUniqueArgs>(args: SelectSubset<T, CommitteeMemberFindUniqueArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommitteeMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommitteeMemberFindUniqueOrThrowArgs} args - Arguments to find a CommitteeMember
     * @example
     * // Get one CommitteeMember
     * const committeeMember = await prisma.committeeMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommitteeMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CommitteeMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommitteeMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberFindFirstArgs} args - Arguments to find a CommitteeMember
     * @example
     * // Get one CommitteeMember
     * const committeeMember = await prisma.committeeMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommitteeMemberFindFirstArgs>(args?: SelectSubset<T, CommitteeMemberFindFirstArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommitteeMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberFindFirstOrThrowArgs} args - Arguments to find a CommitteeMember
     * @example
     * // Get one CommitteeMember
     * const committeeMember = await prisma.committeeMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommitteeMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CommitteeMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommitteeMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommitteeMembers
     * const committeeMembers = await prisma.committeeMember.findMany()
     * 
     * // Get first 10 CommitteeMembers
     * const committeeMembers = await prisma.committeeMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const committeeMemberWithIdOnly = await prisma.committeeMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommitteeMemberFindManyArgs>(args?: SelectSubset<T, CommitteeMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommitteeMember.
     * @param {CommitteeMemberCreateArgs} args - Arguments to create a CommitteeMember.
     * @example
     * // Create one CommitteeMember
     * const CommitteeMember = await prisma.committeeMember.create({
     *   data: {
     *     // ... data to create a CommitteeMember
     *   }
     * })
     * 
     */
    create<T extends CommitteeMemberCreateArgs>(args: SelectSubset<T, CommitteeMemberCreateArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommitteeMembers.
     * @param {CommitteeMemberCreateManyArgs} args - Arguments to create many CommitteeMembers.
     * @example
     * // Create many CommitteeMembers
     * const committeeMember = await prisma.committeeMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommitteeMemberCreateManyArgs>(args?: SelectSubset<T, CommitteeMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommitteeMembers and returns the data saved in the database.
     * @param {CommitteeMemberCreateManyAndReturnArgs} args - Arguments to create many CommitteeMembers.
     * @example
     * // Create many CommitteeMembers
     * const committeeMember = await prisma.committeeMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommitteeMembers and only return the `id`
     * const committeeMemberWithIdOnly = await prisma.committeeMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommitteeMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CommitteeMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommitteeMember.
     * @param {CommitteeMemberDeleteArgs} args - Arguments to delete one CommitteeMember.
     * @example
     * // Delete one CommitteeMember
     * const CommitteeMember = await prisma.committeeMember.delete({
     *   where: {
     *     // ... filter to delete one CommitteeMember
     *   }
     * })
     * 
     */
    delete<T extends CommitteeMemberDeleteArgs>(args: SelectSubset<T, CommitteeMemberDeleteArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommitteeMember.
     * @param {CommitteeMemberUpdateArgs} args - Arguments to update one CommitteeMember.
     * @example
     * // Update one CommitteeMember
     * const committeeMember = await prisma.committeeMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommitteeMemberUpdateArgs>(args: SelectSubset<T, CommitteeMemberUpdateArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommitteeMembers.
     * @param {CommitteeMemberDeleteManyArgs} args - Arguments to filter CommitteeMembers to delete.
     * @example
     * // Delete a few CommitteeMembers
     * const { count } = await prisma.committeeMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommitteeMemberDeleteManyArgs>(args?: SelectSubset<T, CommitteeMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommitteeMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommitteeMembers
     * const committeeMember = await prisma.committeeMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommitteeMemberUpdateManyArgs>(args: SelectSubset<T, CommitteeMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommitteeMembers and returns the data updated in the database.
     * @param {CommitteeMemberUpdateManyAndReturnArgs} args - Arguments to update many CommitteeMembers.
     * @example
     * // Update many CommitteeMembers
     * const committeeMember = await prisma.committeeMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommitteeMembers and only return the `id`
     * const committeeMemberWithIdOnly = await prisma.committeeMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommitteeMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CommitteeMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommitteeMember.
     * @param {CommitteeMemberUpsertArgs} args - Arguments to update or create a CommitteeMember.
     * @example
     * // Update or create a CommitteeMember
     * const committeeMember = await prisma.committeeMember.upsert({
     *   create: {
     *     // ... data to create a CommitteeMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommitteeMember we want to update
     *   }
     * })
     */
    upsert<T extends CommitteeMemberUpsertArgs>(args: SelectSubset<T, CommitteeMemberUpsertArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommitteeMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberCountArgs} args - Arguments to filter CommitteeMembers to count.
     * @example
     * // Count the number of CommitteeMembers
     * const count = await prisma.committeeMember.count({
     *   where: {
     *     // ... the filter for the CommitteeMembers we want to count
     *   }
     * })
    **/
    count<T extends CommitteeMemberCountArgs>(
      args?: Subset<T, CommitteeMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommitteeMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommitteeMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommitteeMemberAggregateArgs>(args: Subset<T, CommitteeMemberAggregateArgs>): Prisma.PrismaPromise<GetCommitteeMemberAggregateType<T>>

    /**
     * Group by CommitteeMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommitteeMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommitteeMemberGroupByArgs['orderBy'] }
        : { orderBy?: CommitteeMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommitteeMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitteeMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommitteeMember model
   */
  readonly fields: CommitteeMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommitteeMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommitteeMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommitteeMember model
   */
  interface CommitteeMemberFieldRefs {
    readonly id: FieldRef<"CommitteeMember", 'Int'>
    readonly name: FieldRef<"CommitteeMember", 'String'>
    readonly role: FieldRef<"CommitteeMember", 'String'>
    readonly image: FieldRef<"CommitteeMember", 'String'>
    readonly bio: FieldRef<"CommitteeMember", 'String'>
    readonly order: FieldRef<"CommitteeMember", 'Int'>
    readonly active: FieldRef<"CommitteeMember", 'Boolean'>
    readonly createdAt: FieldRef<"CommitteeMember", 'DateTime'>
    readonly updatedAt: FieldRef<"CommitteeMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommitteeMember findUnique
   */
  export type CommitteeMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommitteeMember to fetch.
     */
    where: CommitteeMemberWhereUniqueInput
  }

  /**
   * CommitteeMember findUniqueOrThrow
   */
  export type CommitteeMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommitteeMember to fetch.
     */
    where: CommitteeMemberWhereUniqueInput
  }

  /**
   * CommitteeMember findFirst
   */
  export type CommitteeMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommitteeMember to fetch.
     */
    where?: CommitteeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeMembers to fetch.
     */
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommitteeMembers.
     */
    cursor?: CommitteeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitteeMembers.
     */
    distinct?: CommitteeMemberScalarFieldEnum | CommitteeMemberScalarFieldEnum[]
  }

  /**
   * CommitteeMember findFirstOrThrow
   */
  export type CommitteeMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommitteeMember to fetch.
     */
    where?: CommitteeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeMembers to fetch.
     */
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommitteeMembers.
     */
    cursor?: CommitteeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitteeMembers.
     */
    distinct?: CommitteeMemberScalarFieldEnum | CommitteeMemberScalarFieldEnum[]
  }

  /**
   * CommitteeMember findMany
   */
  export type CommitteeMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommitteeMembers to fetch.
     */
    where?: CommitteeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeMembers to fetch.
     */
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommitteeMembers.
     */
    cursor?: CommitteeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeMembers.
     */
    skip?: number
    distinct?: CommitteeMemberScalarFieldEnum | CommitteeMemberScalarFieldEnum[]
  }

  /**
   * CommitteeMember create
   */
  export type CommitteeMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a CommitteeMember.
     */
    data: XOR<CommitteeMemberCreateInput, CommitteeMemberUncheckedCreateInput>
  }

  /**
   * CommitteeMember createMany
   */
  export type CommitteeMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommitteeMembers.
     */
    data: CommitteeMemberCreateManyInput | CommitteeMemberCreateManyInput[]
  }

  /**
   * CommitteeMember createManyAndReturn
   */
  export type CommitteeMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CommitteeMembers.
     */
    data: CommitteeMemberCreateManyInput | CommitteeMemberCreateManyInput[]
  }

  /**
   * CommitteeMember update
   */
  export type CommitteeMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a CommitteeMember.
     */
    data: XOR<CommitteeMemberUpdateInput, CommitteeMemberUncheckedUpdateInput>
    /**
     * Choose, which CommitteeMember to update.
     */
    where: CommitteeMemberWhereUniqueInput
  }

  /**
   * CommitteeMember updateMany
   */
  export type CommitteeMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommitteeMembers.
     */
    data: XOR<CommitteeMemberUpdateManyMutationInput, CommitteeMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommitteeMembers to update
     */
    where?: CommitteeMemberWhereInput
    /**
     * Limit how many CommitteeMembers to update.
     */
    limit?: number
  }

  /**
   * CommitteeMember updateManyAndReturn
   */
  export type CommitteeMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * The data used to update CommitteeMembers.
     */
    data: XOR<CommitteeMemberUpdateManyMutationInput, CommitteeMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommitteeMembers to update
     */
    where?: CommitteeMemberWhereInput
    /**
     * Limit how many CommitteeMembers to update.
     */
    limit?: number
  }

  /**
   * CommitteeMember upsert
   */
  export type CommitteeMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the CommitteeMember to update in case it exists.
     */
    where: CommitteeMemberWhereUniqueInput
    /**
     * In case the CommitteeMember found by the `where` argument doesn't exist, create a new CommitteeMember with this data.
     */
    create: XOR<CommitteeMemberCreateInput, CommitteeMemberUncheckedCreateInput>
    /**
     * In case the CommitteeMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommitteeMemberUpdateInput, CommitteeMemberUncheckedUpdateInput>
  }

  /**
   * CommitteeMember delete
   */
  export type CommitteeMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Filter which CommitteeMember to delete.
     */
    where: CommitteeMemberWhereUniqueInput
  }

  /**
   * CommitteeMember deleteMany
   */
  export type CommitteeMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommitteeMembers to delete
     */
    where?: CommitteeMemberWhereInput
    /**
     * Limit how many CommitteeMembers to delete.
     */
    limit?: number
  }

  /**
   * CommitteeMember without action
   */
  export type CommitteeMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
  }


  /**
   * Model StaffMember
   */

  export type AggregateStaffMember = {
    _count: StaffMemberCountAggregateOutputType | null
    _avg: StaffMemberAvgAggregateOutputType | null
    _sum: StaffMemberSumAggregateOutputType | null
    _min: StaffMemberMinAggregateOutputType | null
    _max: StaffMemberMaxAggregateOutputType | null
  }

  export type StaffMemberAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type StaffMemberSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type StaffMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    image: string | null
    type: string | null
    bio: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    image: string | null
    type: string | null
    bio: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMemberCountAggregateOutputType = {
    id: number
    name: number
    role: number
    image: number
    type: number
    bio: number
    order: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffMemberAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type StaffMemberSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type StaffMemberMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    image?: true
    type?: true
    bio?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMemberMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    image?: true
    type?: true
    bio?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMemberCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    image?: true
    type?: true
    bio?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffMember to aggregate.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffMembers
    **/
    _count?: true | StaffMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMemberMaxAggregateInputType
  }

  export type GetStaffMemberAggregateType<T extends StaffMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffMember[P]>
      : GetScalarType<T[P], AggregateStaffMember[P]>
  }




  export type StaffMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffMemberWhereInput
    orderBy?: StaffMemberOrderByWithAggregationInput | StaffMemberOrderByWithAggregationInput[]
    by: StaffMemberScalarFieldEnum[] | StaffMemberScalarFieldEnum
    having?: StaffMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffMemberCountAggregateInputType | true
    _avg?: StaffMemberAvgAggregateInputType
    _sum?: StaffMemberSumAggregateInputType
    _min?: StaffMemberMinAggregateInputType
    _max?: StaffMemberMaxAggregateInputType
  }

  export type StaffMemberGroupByOutputType = {
    id: number
    name: string
    role: string
    image: string | null
    type: string
    bio: string | null
    order: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: StaffMemberCountAggregateOutputType | null
    _avg: StaffMemberAvgAggregateOutputType | null
    _sum: StaffMemberSumAggregateOutputType | null
    _min: StaffMemberMinAggregateOutputType | null
    _max: StaffMemberMaxAggregateOutputType | null
  }

  type GetStaffMemberGroupByPayload<T extends StaffMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffMemberGroupByOutputType[P]>
            : GetScalarType<T[P], StaffMemberGroupByOutputType[P]>
        }
      >
    >


  export type StaffMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    image?: boolean
    type?: boolean
    bio?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    image?: boolean
    type?: boolean
    bio?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    image?: boolean
    type?: boolean
    bio?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    image?: boolean
    type?: boolean
    bio?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "image" | "type" | "bio" | "order" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["staffMember"]>

  export type $StaffMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      role: string
      image: string | null
      type: string
      bio: string | null
      order: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffMember"]>
    composites: {}
  }

  type StaffMemberGetPayload<S extends boolean | null | undefined | StaffMemberDefaultArgs> = $Result.GetResult<Prisma.$StaffMemberPayload, S>

  type StaffMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffMemberCountAggregateInputType | true
    }

  export interface StaffMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffMember'], meta: { name: 'StaffMember' } }
    /**
     * Find zero or one StaffMember that matches the filter.
     * @param {StaffMemberFindUniqueArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffMemberFindUniqueArgs>(args: SelectSubset<T, StaffMemberFindUniqueArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffMemberFindUniqueOrThrowArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindFirstArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffMemberFindFirstArgs>(args?: SelectSubset<T, StaffMemberFindFirstArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindFirstOrThrowArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffMembers
     * const staffMembers = await prisma.staffMember.findMany()
     * 
     * // Get first 10 StaffMembers
     * const staffMembers = await prisma.staffMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffMemberFindManyArgs>(args?: SelectSubset<T, StaffMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffMember.
     * @param {StaffMemberCreateArgs} args - Arguments to create a StaffMember.
     * @example
     * // Create one StaffMember
     * const StaffMember = await prisma.staffMember.create({
     *   data: {
     *     // ... data to create a StaffMember
     *   }
     * })
     * 
     */
    create<T extends StaffMemberCreateArgs>(args: SelectSubset<T, StaffMemberCreateArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffMembers.
     * @param {StaffMemberCreateManyArgs} args - Arguments to create many StaffMembers.
     * @example
     * // Create many StaffMembers
     * const staffMember = await prisma.staffMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffMemberCreateManyArgs>(args?: SelectSubset<T, StaffMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffMembers and returns the data saved in the database.
     * @param {StaffMemberCreateManyAndReturnArgs} args - Arguments to create many StaffMembers.
     * @example
     * // Create many StaffMembers
     * const staffMember = await prisma.staffMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffMembers and only return the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffMember.
     * @param {StaffMemberDeleteArgs} args - Arguments to delete one StaffMember.
     * @example
     * // Delete one StaffMember
     * const StaffMember = await prisma.staffMember.delete({
     *   where: {
     *     // ... filter to delete one StaffMember
     *   }
     * })
     * 
     */
    delete<T extends StaffMemberDeleteArgs>(args: SelectSubset<T, StaffMemberDeleteArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffMember.
     * @param {StaffMemberUpdateArgs} args - Arguments to update one StaffMember.
     * @example
     * // Update one StaffMember
     * const staffMember = await prisma.staffMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffMemberUpdateArgs>(args: SelectSubset<T, StaffMemberUpdateArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffMembers.
     * @param {StaffMemberDeleteManyArgs} args - Arguments to filter StaffMembers to delete.
     * @example
     * // Delete a few StaffMembers
     * const { count } = await prisma.staffMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffMemberDeleteManyArgs>(args?: SelectSubset<T, StaffMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffMembers
     * const staffMember = await prisma.staffMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffMemberUpdateManyArgs>(args: SelectSubset<T, StaffMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffMembers and returns the data updated in the database.
     * @param {StaffMemberUpdateManyAndReturnArgs} args - Arguments to update many StaffMembers.
     * @example
     * // Update many StaffMembers
     * const staffMember = await prisma.staffMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffMembers and only return the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffMember.
     * @param {StaffMemberUpsertArgs} args - Arguments to update or create a StaffMember.
     * @example
     * // Update or create a StaffMember
     * const staffMember = await prisma.staffMember.upsert({
     *   create: {
     *     // ... data to create a StaffMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffMember we want to update
     *   }
     * })
     */
    upsert<T extends StaffMemberUpsertArgs>(args: SelectSubset<T, StaffMemberUpsertArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberCountArgs} args - Arguments to filter StaffMembers to count.
     * @example
     * // Count the number of StaffMembers
     * const count = await prisma.staffMember.count({
     *   where: {
     *     // ... the filter for the StaffMembers we want to count
     *   }
     * })
    **/
    count<T extends StaffMemberCountArgs>(
      args?: Subset<T, StaffMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffMemberAggregateArgs>(args: Subset<T, StaffMemberAggregateArgs>): Prisma.PrismaPromise<GetStaffMemberAggregateType<T>>

    /**
     * Group by StaffMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffMemberGroupByArgs['orderBy'] }
        : { orderBy?: StaffMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffMember model
   */
  readonly fields: StaffMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffMember model
   */
  interface StaffMemberFieldRefs {
    readonly id: FieldRef<"StaffMember", 'Int'>
    readonly name: FieldRef<"StaffMember", 'String'>
    readonly role: FieldRef<"StaffMember", 'String'>
    readonly image: FieldRef<"StaffMember", 'String'>
    readonly type: FieldRef<"StaffMember", 'String'>
    readonly bio: FieldRef<"StaffMember", 'String'>
    readonly order: FieldRef<"StaffMember", 'Int'>
    readonly active: FieldRef<"StaffMember", 'Boolean'>
    readonly createdAt: FieldRef<"StaffMember", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffMember findUnique
   */
  export type StaffMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember findUniqueOrThrow
   */
  export type StaffMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember findFirst
   */
  export type StaffMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffMembers.
     */
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember findFirstOrThrow
   */
  export type StaffMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffMembers.
     */
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember findMany
   */
  export type StaffMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMembers to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember create
   */
  export type StaffMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a StaffMember.
     */
    data: XOR<StaffMemberCreateInput, StaffMemberUncheckedCreateInput>
  }

  /**
   * StaffMember createMany
   */
  export type StaffMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffMembers.
     */
    data: StaffMemberCreateManyInput | StaffMemberCreateManyInput[]
  }

  /**
   * StaffMember createManyAndReturn
   */
  export type StaffMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data used to create many StaffMembers.
     */
    data: StaffMemberCreateManyInput | StaffMemberCreateManyInput[]
  }

  /**
   * StaffMember update
   */
  export type StaffMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a StaffMember.
     */
    data: XOR<StaffMemberUpdateInput, StaffMemberUncheckedUpdateInput>
    /**
     * Choose, which StaffMember to update.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember updateMany
   */
  export type StaffMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffMembers.
     */
    data: XOR<StaffMemberUpdateManyMutationInput, StaffMemberUncheckedUpdateManyInput>
    /**
     * Filter which StaffMembers to update
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to update.
     */
    limit?: number
  }

  /**
   * StaffMember updateManyAndReturn
   */
  export type StaffMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data used to update StaffMembers.
     */
    data: XOR<StaffMemberUpdateManyMutationInput, StaffMemberUncheckedUpdateManyInput>
    /**
     * Filter which StaffMembers to update
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to update.
     */
    limit?: number
  }

  /**
   * StaffMember upsert
   */
  export type StaffMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the StaffMember to update in case it exists.
     */
    where: StaffMemberWhereUniqueInput
    /**
     * In case the StaffMember found by the `where` argument doesn't exist, create a new StaffMember with this data.
     */
    create: XOR<StaffMemberCreateInput, StaffMemberUncheckedCreateInput>
    /**
     * In case the StaffMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffMemberUpdateInput, StaffMemberUncheckedUpdateInput>
  }

  /**
   * StaffMember delete
   */
  export type StaffMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter which StaffMember to delete.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember deleteMany
   */
  export type StaffMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffMembers to delete
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to delete.
     */
    limit?: number
  }

  /**
   * StaffMember without action
   */
  export type StaffMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
  }


  /**
   * Model ContentBlock
   */

  export type AggregateContentBlock = {
    _count: ContentBlockCountAggregateOutputType | null
    _avg: ContentBlockAvgAggregateOutputType | null
    _sum: ContentBlockSumAggregateOutputType | null
    _min: ContentBlockMinAggregateOutputType | null
    _max: ContentBlockMaxAggregateOutputType | null
  }

  export type ContentBlockAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ContentBlockSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ContentBlockMinAggregateOutputType = {
    id: number | null
    page: string | null
    section: string | null
    title: string | null
    content: string | null
    image: string | null
    link: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentBlockMaxAggregateOutputType = {
    id: number | null
    page: string | null
    section: string | null
    title: string | null
    content: string | null
    image: string | null
    link: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentBlockCountAggregateOutputType = {
    id: number
    page: number
    section: number
    title: number
    content: number
    image: number
    link: number
    order: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentBlockAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ContentBlockSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ContentBlockMinAggregateInputType = {
    id?: true
    page?: true
    section?: true
    title?: true
    content?: true
    image?: true
    link?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentBlockMaxAggregateInputType = {
    id?: true
    page?: true
    section?: true
    title?: true
    content?: true
    image?: true
    link?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentBlockCountAggregateInputType = {
    id?: true
    page?: true
    section?: true
    title?: true
    content?: true
    image?: true
    link?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentBlock to aggregate.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentBlocks
    **/
    _count?: true | ContentBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentBlockMaxAggregateInputType
  }

  export type GetContentBlockAggregateType<T extends ContentBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateContentBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentBlock[P]>
      : GetScalarType<T[P], AggregateContentBlock[P]>
  }




  export type ContentBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentBlockWhereInput
    orderBy?: ContentBlockOrderByWithAggregationInput | ContentBlockOrderByWithAggregationInput[]
    by: ContentBlockScalarFieldEnum[] | ContentBlockScalarFieldEnum
    having?: ContentBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentBlockCountAggregateInputType | true
    _avg?: ContentBlockAvgAggregateInputType
    _sum?: ContentBlockSumAggregateInputType
    _min?: ContentBlockMinAggregateInputType
    _max?: ContentBlockMaxAggregateInputType
  }

  export type ContentBlockGroupByOutputType = {
    id: number
    page: string
    section: string
    title: string | null
    content: string | null
    image: string | null
    link: string | null
    order: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContentBlockCountAggregateOutputType | null
    _avg: ContentBlockAvgAggregateOutputType | null
    _sum: ContentBlockSumAggregateOutputType | null
    _min: ContentBlockMinAggregateOutputType | null
    _max: ContentBlockMaxAggregateOutputType | null
  }

  type GetContentBlockGroupByPayload<T extends ContentBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentBlockGroupByOutputType[P]>
            : GetScalarType<T[P], ContentBlockGroupByOutputType[P]>
        }
      >
    >


  export type ContentBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    section?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    link?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contentBlock"]>

  export type ContentBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    section?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    link?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contentBlock"]>

  export type ContentBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    section?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    link?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contentBlock"]>

  export type ContentBlockSelectScalar = {
    id?: boolean
    page?: boolean
    section?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    link?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "page" | "section" | "title" | "content" | "image" | "link" | "order" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["contentBlock"]>

  export type $ContentBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentBlock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      page: string
      section: string
      title: string | null
      content: string | null
      image: string | null
      link: string | null
      order: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentBlock"]>
    composites: {}
  }

  type ContentBlockGetPayload<S extends boolean | null | undefined | ContentBlockDefaultArgs> = $Result.GetResult<Prisma.$ContentBlockPayload, S>

  type ContentBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentBlockCountAggregateInputType | true
    }

  export interface ContentBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentBlock'], meta: { name: 'ContentBlock' } }
    /**
     * Find zero or one ContentBlock that matches the filter.
     * @param {ContentBlockFindUniqueArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentBlockFindUniqueArgs>(args: SelectSubset<T, ContentBlockFindUniqueArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentBlockFindUniqueOrThrowArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindFirstArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentBlockFindFirstArgs>(args?: SelectSubset<T, ContentBlockFindFirstArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindFirstOrThrowArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentBlocks
     * const contentBlocks = await prisma.contentBlock.findMany()
     * 
     * // Get first 10 ContentBlocks
     * const contentBlocks = await prisma.contentBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentBlockWithIdOnly = await prisma.contentBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentBlockFindManyArgs>(args?: SelectSubset<T, ContentBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentBlock.
     * @param {ContentBlockCreateArgs} args - Arguments to create a ContentBlock.
     * @example
     * // Create one ContentBlock
     * const ContentBlock = await prisma.contentBlock.create({
     *   data: {
     *     // ... data to create a ContentBlock
     *   }
     * })
     * 
     */
    create<T extends ContentBlockCreateArgs>(args: SelectSubset<T, ContentBlockCreateArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentBlocks.
     * @param {ContentBlockCreateManyArgs} args - Arguments to create many ContentBlocks.
     * @example
     * // Create many ContentBlocks
     * const contentBlock = await prisma.contentBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentBlockCreateManyArgs>(args?: SelectSubset<T, ContentBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentBlocks and returns the data saved in the database.
     * @param {ContentBlockCreateManyAndReturnArgs} args - Arguments to create many ContentBlocks.
     * @example
     * // Create many ContentBlocks
     * const contentBlock = await prisma.contentBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentBlocks and only return the `id`
     * const contentBlockWithIdOnly = await prisma.contentBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentBlock.
     * @param {ContentBlockDeleteArgs} args - Arguments to delete one ContentBlock.
     * @example
     * // Delete one ContentBlock
     * const ContentBlock = await prisma.contentBlock.delete({
     *   where: {
     *     // ... filter to delete one ContentBlock
     *   }
     * })
     * 
     */
    delete<T extends ContentBlockDeleteArgs>(args: SelectSubset<T, ContentBlockDeleteArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentBlock.
     * @param {ContentBlockUpdateArgs} args - Arguments to update one ContentBlock.
     * @example
     * // Update one ContentBlock
     * const contentBlock = await prisma.contentBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentBlockUpdateArgs>(args: SelectSubset<T, ContentBlockUpdateArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentBlocks.
     * @param {ContentBlockDeleteManyArgs} args - Arguments to filter ContentBlocks to delete.
     * @example
     * // Delete a few ContentBlocks
     * const { count } = await prisma.contentBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentBlockDeleteManyArgs>(args?: SelectSubset<T, ContentBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentBlocks
     * const contentBlock = await prisma.contentBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentBlockUpdateManyArgs>(args: SelectSubset<T, ContentBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentBlocks and returns the data updated in the database.
     * @param {ContentBlockUpdateManyAndReturnArgs} args - Arguments to update many ContentBlocks.
     * @example
     * // Update many ContentBlocks
     * const contentBlock = await prisma.contentBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentBlocks and only return the `id`
     * const contentBlockWithIdOnly = await prisma.contentBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentBlock.
     * @param {ContentBlockUpsertArgs} args - Arguments to update or create a ContentBlock.
     * @example
     * // Update or create a ContentBlock
     * const contentBlock = await prisma.contentBlock.upsert({
     *   create: {
     *     // ... data to create a ContentBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentBlock we want to update
     *   }
     * })
     */
    upsert<T extends ContentBlockUpsertArgs>(args: SelectSubset<T, ContentBlockUpsertArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockCountArgs} args - Arguments to filter ContentBlocks to count.
     * @example
     * // Count the number of ContentBlocks
     * const count = await prisma.contentBlock.count({
     *   where: {
     *     // ... the filter for the ContentBlocks we want to count
     *   }
     * })
    **/
    count<T extends ContentBlockCountArgs>(
      args?: Subset<T, ContentBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentBlockAggregateArgs>(args: Subset<T, ContentBlockAggregateArgs>): Prisma.PrismaPromise<GetContentBlockAggregateType<T>>

    /**
     * Group by ContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentBlockGroupByArgs['orderBy'] }
        : { orderBy?: ContentBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentBlock model
   */
  readonly fields: ContentBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentBlock model
   */
  interface ContentBlockFieldRefs {
    readonly id: FieldRef<"ContentBlock", 'Int'>
    readonly page: FieldRef<"ContentBlock", 'String'>
    readonly section: FieldRef<"ContentBlock", 'String'>
    readonly title: FieldRef<"ContentBlock", 'String'>
    readonly content: FieldRef<"ContentBlock", 'String'>
    readonly image: FieldRef<"ContentBlock", 'String'>
    readonly link: FieldRef<"ContentBlock", 'String'>
    readonly order: FieldRef<"ContentBlock", 'Int'>
    readonly active: FieldRef<"ContentBlock", 'Boolean'>
    readonly createdAt: FieldRef<"ContentBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentBlock findUnique
   */
  export type ContentBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock findUniqueOrThrow
   */
  export type ContentBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock findFirst
   */
  export type ContentBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentBlocks.
     */
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock findFirstOrThrow
   */
  export type ContentBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentBlocks.
     */
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock findMany
   */
  export type ContentBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Filter, which ContentBlocks to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock create
   */
  export type ContentBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * The data needed to create a ContentBlock.
     */
    data: XOR<ContentBlockCreateInput, ContentBlockUncheckedCreateInput>
  }

  /**
   * ContentBlock createMany
   */
  export type ContentBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentBlocks.
     */
    data: ContentBlockCreateManyInput | ContentBlockCreateManyInput[]
  }

  /**
   * ContentBlock createManyAndReturn
   */
  export type ContentBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * The data used to create many ContentBlocks.
     */
    data: ContentBlockCreateManyInput | ContentBlockCreateManyInput[]
  }

  /**
   * ContentBlock update
   */
  export type ContentBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * The data needed to update a ContentBlock.
     */
    data: XOR<ContentBlockUpdateInput, ContentBlockUncheckedUpdateInput>
    /**
     * Choose, which ContentBlock to update.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock updateMany
   */
  export type ContentBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentBlocks.
     */
    data: XOR<ContentBlockUpdateManyMutationInput, ContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which ContentBlocks to update
     */
    where?: ContentBlockWhereInput
    /**
     * Limit how many ContentBlocks to update.
     */
    limit?: number
  }

  /**
   * ContentBlock updateManyAndReturn
   */
  export type ContentBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * The data used to update ContentBlocks.
     */
    data: XOR<ContentBlockUpdateManyMutationInput, ContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which ContentBlocks to update
     */
    where?: ContentBlockWhereInput
    /**
     * Limit how many ContentBlocks to update.
     */
    limit?: number
  }

  /**
   * ContentBlock upsert
   */
  export type ContentBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * The filter to search for the ContentBlock to update in case it exists.
     */
    where: ContentBlockWhereUniqueInput
    /**
     * In case the ContentBlock found by the `where` argument doesn't exist, create a new ContentBlock with this data.
     */
    create: XOR<ContentBlockCreateInput, ContentBlockUncheckedCreateInput>
    /**
     * In case the ContentBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentBlockUpdateInput, ContentBlockUncheckedUpdateInput>
  }

  /**
   * ContentBlock delete
   */
  export type ContentBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Filter which ContentBlock to delete.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock deleteMany
   */
  export type ContentBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentBlocks to delete
     */
    where?: ContentBlockWhereInput
    /**
     * Limit how many ContentBlocks to delete.
     */
    limit?: number
  }

  /**
   * ContentBlock without action
   */
  export type ContentBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
  }


  /**
   * Model ResearchPublication
   */

  export type AggregateResearchPublication = {
    _count: ResearchPublicationCountAggregateOutputType | null
    _avg: ResearchPublicationAvgAggregateOutputType | null
    _sum: ResearchPublicationSumAggregateOutputType | null
    _min: ResearchPublicationMinAggregateOutputType | null
    _max: ResearchPublicationMaxAggregateOutputType | null
  }

  export type ResearchPublicationAvgAggregateOutputType = {
    id: number | null
  }

  export type ResearchPublicationSumAggregateOutputType = {
    id: number | null
  }

  export type ResearchPublicationMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
    link: string | null
    category: string | null
    publishedDate: Date | null
    authors: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResearchPublicationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
    link: string | null
    category: string | null
    publishedDate: Date | null
    authors: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResearchPublicationCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    link: number
    category: number
    publishedDate: number
    authors: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResearchPublicationAvgAggregateInputType = {
    id?: true
  }

  export type ResearchPublicationSumAggregateInputType = {
    id?: true
  }

  export type ResearchPublicationMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    link?: true
    category?: true
    publishedDate?: true
    authors?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResearchPublicationMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    link?: true
    category?: true
    publishedDate?: true
    authors?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResearchPublicationCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    link?: true
    category?: true
    publishedDate?: true
    authors?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResearchPublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchPublication to aggregate.
     */
    where?: ResearchPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchPublications to fetch.
     */
    orderBy?: ResearchPublicationOrderByWithRelationInput | ResearchPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearchPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchPublications
    **/
    _count?: true | ResearchPublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResearchPublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResearchPublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchPublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchPublicationMaxAggregateInputType
  }

  export type GetResearchPublicationAggregateType<T extends ResearchPublicationAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchPublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchPublication[P]>
      : GetScalarType<T[P], AggregateResearchPublication[P]>
  }




  export type ResearchPublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchPublicationWhereInput
    orderBy?: ResearchPublicationOrderByWithAggregationInput | ResearchPublicationOrderByWithAggregationInput[]
    by: ResearchPublicationScalarFieldEnum[] | ResearchPublicationScalarFieldEnum
    having?: ResearchPublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchPublicationCountAggregateInputType | true
    _avg?: ResearchPublicationAvgAggregateInputType
    _sum?: ResearchPublicationSumAggregateInputType
    _min?: ResearchPublicationMinAggregateInputType
    _max?: ResearchPublicationMaxAggregateInputType
  }

  export type ResearchPublicationGroupByOutputType = {
    id: number
    title: string
    description: string | null
    image: string | null
    link: string | null
    category: string
    publishedDate: Date
    authors: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ResearchPublicationCountAggregateOutputType | null
    _avg: ResearchPublicationAvgAggregateOutputType | null
    _sum: ResearchPublicationSumAggregateOutputType | null
    _min: ResearchPublicationMinAggregateOutputType | null
    _max: ResearchPublicationMaxAggregateOutputType | null
  }

  type GetResearchPublicationGroupByPayload<T extends ResearchPublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearchPublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchPublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchPublicationGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchPublicationGroupByOutputType[P]>
        }
      >
    >


  export type ResearchPublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    category?: boolean
    publishedDate?: boolean
    authors?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["researchPublication"]>

  export type ResearchPublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    category?: boolean
    publishedDate?: boolean
    authors?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["researchPublication"]>

  export type ResearchPublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    category?: boolean
    publishedDate?: boolean
    authors?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["researchPublication"]>

  export type ResearchPublicationSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    category?: boolean
    publishedDate?: boolean
    authors?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResearchPublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "link" | "category" | "publishedDate" | "authors" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["researchPublication"]>

  export type $ResearchPublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResearchPublication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      image: string | null
      link: string | null
      category: string
      publishedDate: Date
      authors: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["researchPublication"]>
    composites: {}
  }

  type ResearchPublicationGetPayload<S extends boolean | null | undefined | ResearchPublicationDefaultArgs> = $Result.GetResult<Prisma.$ResearchPublicationPayload, S>

  type ResearchPublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResearchPublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResearchPublicationCountAggregateInputType | true
    }

  export interface ResearchPublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResearchPublication'], meta: { name: 'ResearchPublication' } }
    /**
     * Find zero or one ResearchPublication that matches the filter.
     * @param {ResearchPublicationFindUniqueArgs} args - Arguments to find a ResearchPublication
     * @example
     * // Get one ResearchPublication
     * const researchPublication = await prisma.researchPublication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResearchPublicationFindUniqueArgs>(args: SelectSubset<T, ResearchPublicationFindUniqueArgs<ExtArgs>>): Prisma__ResearchPublicationClient<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResearchPublication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResearchPublicationFindUniqueOrThrowArgs} args - Arguments to find a ResearchPublication
     * @example
     * // Get one ResearchPublication
     * const researchPublication = await prisma.researchPublication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResearchPublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ResearchPublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResearchPublicationClient<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResearchPublication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchPublicationFindFirstArgs} args - Arguments to find a ResearchPublication
     * @example
     * // Get one ResearchPublication
     * const researchPublication = await prisma.researchPublication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResearchPublicationFindFirstArgs>(args?: SelectSubset<T, ResearchPublicationFindFirstArgs<ExtArgs>>): Prisma__ResearchPublicationClient<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResearchPublication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchPublicationFindFirstOrThrowArgs} args - Arguments to find a ResearchPublication
     * @example
     * // Get one ResearchPublication
     * const researchPublication = await prisma.researchPublication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResearchPublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ResearchPublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResearchPublicationClient<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResearchPublications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchPublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchPublications
     * const researchPublications = await prisma.researchPublication.findMany()
     * 
     * // Get first 10 ResearchPublications
     * const researchPublications = await prisma.researchPublication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchPublicationWithIdOnly = await prisma.researchPublication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResearchPublicationFindManyArgs>(args?: SelectSubset<T, ResearchPublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResearchPublication.
     * @param {ResearchPublicationCreateArgs} args - Arguments to create a ResearchPublication.
     * @example
     * // Create one ResearchPublication
     * const ResearchPublication = await prisma.researchPublication.create({
     *   data: {
     *     // ... data to create a ResearchPublication
     *   }
     * })
     * 
     */
    create<T extends ResearchPublicationCreateArgs>(args: SelectSubset<T, ResearchPublicationCreateArgs<ExtArgs>>): Prisma__ResearchPublicationClient<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResearchPublications.
     * @param {ResearchPublicationCreateManyArgs} args - Arguments to create many ResearchPublications.
     * @example
     * // Create many ResearchPublications
     * const researchPublication = await prisma.researchPublication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResearchPublicationCreateManyArgs>(args?: SelectSubset<T, ResearchPublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResearchPublications and returns the data saved in the database.
     * @param {ResearchPublicationCreateManyAndReturnArgs} args - Arguments to create many ResearchPublications.
     * @example
     * // Create many ResearchPublications
     * const researchPublication = await prisma.researchPublication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResearchPublications and only return the `id`
     * const researchPublicationWithIdOnly = await prisma.researchPublication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResearchPublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ResearchPublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResearchPublication.
     * @param {ResearchPublicationDeleteArgs} args - Arguments to delete one ResearchPublication.
     * @example
     * // Delete one ResearchPublication
     * const ResearchPublication = await prisma.researchPublication.delete({
     *   where: {
     *     // ... filter to delete one ResearchPublication
     *   }
     * })
     * 
     */
    delete<T extends ResearchPublicationDeleteArgs>(args: SelectSubset<T, ResearchPublicationDeleteArgs<ExtArgs>>): Prisma__ResearchPublicationClient<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResearchPublication.
     * @param {ResearchPublicationUpdateArgs} args - Arguments to update one ResearchPublication.
     * @example
     * // Update one ResearchPublication
     * const researchPublication = await prisma.researchPublication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResearchPublicationUpdateArgs>(args: SelectSubset<T, ResearchPublicationUpdateArgs<ExtArgs>>): Prisma__ResearchPublicationClient<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResearchPublications.
     * @param {ResearchPublicationDeleteManyArgs} args - Arguments to filter ResearchPublications to delete.
     * @example
     * // Delete a few ResearchPublications
     * const { count } = await prisma.researchPublication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResearchPublicationDeleteManyArgs>(args?: SelectSubset<T, ResearchPublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchPublications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchPublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchPublications
     * const researchPublication = await prisma.researchPublication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResearchPublicationUpdateManyArgs>(args: SelectSubset<T, ResearchPublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchPublications and returns the data updated in the database.
     * @param {ResearchPublicationUpdateManyAndReturnArgs} args - Arguments to update many ResearchPublications.
     * @example
     * // Update many ResearchPublications
     * const researchPublication = await prisma.researchPublication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResearchPublications and only return the `id`
     * const researchPublicationWithIdOnly = await prisma.researchPublication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResearchPublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ResearchPublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResearchPublication.
     * @param {ResearchPublicationUpsertArgs} args - Arguments to update or create a ResearchPublication.
     * @example
     * // Update or create a ResearchPublication
     * const researchPublication = await prisma.researchPublication.upsert({
     *   create: {
     *     // ... data to create a ResearchPublication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchPublication we want to update
     *   }
     * })
     */
    upsert<T extends ResearchPublicationUpsertArgs>(args: SelectSubset<T, ResearchPublicationUpsertArgs<ExtArgs>>): Prisma__ResearchPublicationClient<$Result.GetResult<Prisma.$ResearchPublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResearchPublications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchPublicationCountArgs} args - Arguments to filter ResearchPublications to count.
     * @example
     * // Count the number of ResearchPublications
     * const count = await prisma.researchPublication.count({
     *   where: {
     *     // ... the filter for the ResearchPublications we want to count
     *   }
     * })
    **/
    count<T extends ResearchPublicationCountArgs>(
      args?: Subset<T, ResearchPublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchPublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchPublication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchPublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResearchPublicationAggregateArgs>(args: Subset<T, ResearchPublicationAggregateArgs>): Prisma.PrismaPromise<GetResearchPublicationAggregateType<T>>

    /**
     * Group by ResearchPublication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchPublicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResearchPublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchPublicationGroupByArgs['orderBy'] }
        : { orderBy?: ResearchPublicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResearchPublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResearchPublication model
   */
  readonly fields: ResearchPublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchPublication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResearchPublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResearchPublication model
   */
  interface ResearchPublicationFieldRefs {
    readonly id: FieldRef<"ResearchPublication", 'Int'>
    readonly title: FieldRef<"ResearchPublication", 'String'>
    readonly description: FieldRef<"ResearchPublication", 'String'>
    readonly image: FieldRef<"ResearchPublication", 'String'>
    readonly link: FieldRef<"ResearchPublication", 'String'>
    readonly category: FieldRef<"ResearchPublication", 'String'>
    readonly publishedDate: FieldRef<"ResearchPublication", 'DateTime'>
    readonly authors: FieldRef<"ResearchPublication", 'String'>
    readonly active: FieldRef<"ResearchPublication", 'Boolean'>
    readonly createdAt: FieldRef<"ResearchPublication", 'DateTime'>
    readonly updatedAt: FieldRef<"ResearchPublication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResearchPublication findUnique
   */
  export type ResearchPublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * Filter, which ResearchPublication to fetch.
     */
    where: ResearchPublicationWhereUniqueInput
  }

  /**
   * ResearchPublication findUniqueOrThrow
   */
  export type ResearchPublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * Filter, which ResearchPublication to fetch.
     */
    where: ResearchPublicationWhereUniqueInput
  }

  /**
   * ResearchPublication findFirst
   */
  export type ResearchPublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * Filter, which ResearchPublication to fetch.
     */
    where?: ResearchPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchPublications to fetch.
     */
    orderBy?: ResearchPublicationOrderByWithRelationInput | ResearchPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchPublications.
     */
    cursor?: ResearchPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchPublications.
     */
    distinct?: ResearchPublicationScalarFieldEnum | ResearchPublicationScalarFieldEnum[]
  }

  /**
   * ResearchPublication findFirstOrThrow
   */
  export type ResearchPublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * Filter, which ResearchPublication to fetch.
     */
    where?: ResearchPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchPublications to fetch.
     */
    orderBy?: ResearchPublicationOrderByWithRelationInput | ResearchPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchPublications.
     */
    cursor?: ResearchPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchPublications.
     */
    distinct?: ResearchPublicationScalarFieldEnum | ResearchPublicationScalarFieldEnum[]
  }

  /**
   * ResearchPublication findMany
   */
  export type ResearchPublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * Filter, which ResearchPublications to fetch.
     */
    where?: ResearchPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchPublications to fetch.
     */
    orderBy?: ResearchPublicationOrderByWithRelationInput | ResearchPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchPublications.
     */
    cursor?: ResearchPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchPublications.
     */
    skip?: number
    distinct?: ResearchPublicationScalarFieldEnum | ResearchPublicationScalarFieldEnum[]
  }

  /**
   * ResearchPublication create
   */
  export type ResearchPublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * The data needed to create a ResearchPublication.
     */
    data: XOR<ResearchPublicationCreateInput, ResearchPublicationUncheckedCreateInput>
  }

  /**
   * ResearchPublication createMany
   */
  export type ResearchPublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResearchPublications.
     */
    data: ResearchPublicationCreateManyInput | ResearchPublicationCreateManyInput[]
  }

  /**
   * ResearchPublication createManyAndReturn
   */
  export type ResearchPublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * The data used to create many ResearchPublications.
     */
    data: ResearchPublicationCreateManyInput | ResearchPublicationCreateManyInput[]
  }

  /**
   * ResearchPublication update
   */
  export type ResearchPublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * The data needed to update a ResearchPublication.
     */
    data: XOR<ResearchPublicationUpdateInput, ResearchPublicationUncheckedUpdateInput>
    /**
     * Choose, which ResearchPublication to update.
     */
    where: ResearchPublicationWhereUniqueInput
  }

  /**
   * ResearchPublication updateMany
   */
  export type ResearchPublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResearchPublications.
     */
    data: XOR<ResearchPublicationUpdateManyMutationInput, ResearchPublicationUncheckedUpdateManyInput>
    /**
     * Filter which ResearchPublications to update
     */
    where?: ResearchPublicationWhereInput
    /**
     * Limit how many ResearchPublications to update.
     */
    limit?: number
  }

  /**
   * ResearchPublication updateManyAndReturn
   */
  export type ResearchPublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * The data used to update ResearchPublications.
     */
    data: XOR<ResearchPublicationUpdateManyMutationInput, ResearchPublicationUncheckedUpdateManyInput>
    /**
     * Filter which ResearchPublications to update
     */
    where?: ResearchPublicationWhereInput
    /**
     * Limit how many ResearchPublications to update.
     */
    limit?: number
  }

  /**
   * ResearchPublication upsert
   */
  export type ResearchPublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * The filter to search for the ResearchPublication to update in case it exists.
     */
    where: ResearchPublicationWhereUniqueInput
    /**
     * In case the ResearchPublication found by the `where` argument doesn't exist, create a new ResearchPublication with this data.
     */
    create: XOR<ResearchPublicationCreateInput, ResearchPublicationUncheckedCreateInput>
    /**
     * In case the ResearchPublication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearchPublicationUpdateInput, ResearchPublicationUncheckedUpdateInput>
  }

  /**
   * ResearchPublication delete
   */
  export type ResearchPublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
    /**
     * Filter which ResearchPublication to delete.
     */
    where: ResearchPublicationWhereUniqueInput
  }

  /**
   * ResearchPublication deleteMany
   */
  export type ResearchPublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchPublications to delete
     */
    where?: ResearchPublicationWhereInput
    /**
     * Limit how many ResearchPublications to delete.
     */
    limit?: number
  }

  /**
   * ResearchPublication without action
   */
  export type ResearchPublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchPublication
     */
    select?: ResearchPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchPublication
     */
    omit?: ResearchPublicationOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
    link: string | null
    buttonText: string | null
    type: string | null
    isReverse: boolean | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
    link: string | null
    buttonText: string | null
    type: string | null
    isReverse: boolean | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    link: number
    buttonText: number
    type: number
    isReverse: number
    order: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    link?: true
    buttonText?: true
    type?: true
    isReverse?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    link?: true
    buttonText?: true
    type?: true
    isReverse?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    link?: true
    buttonText?: true
    type?: true
    isReverse?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    title: string
    description: string
    image: string
    link: string
    buttonText: string
    type: string
    isReverse: boolean
    order: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    buttonText?: boolean
    type?: boolean
    isReverse?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    buttonText?: boolean
    type?: boolean
    isReverse?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    buttonText?: boolean
    type?: boolean
    isReverse?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    buttonText?: boolean
    type?: boolean
    isReverse?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "link" | "buttonText" | "type" | "isReverse" | "order" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      image: string
      link: string
      buttonText: string
      type: string
      isReverse: boolean
      order: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly image: FieldRef<"Service", 'String'>
    readonly link: FieldRef<"Service", 'String'>
    readonly buttonText: FieldRef<"Service", 'String'>
    readonly type: FieldRef<"Service", 'String'>
    readonly isReverse: FieldRef<"Service", 'Boolean'>
    readonly order: FieldRef<"Service", 'Int'>
    readonly active: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    name: 'name',
    title: 'title',
    specialty: 'specialty',
    image: 'image',
    rating: 'rating',
    phone: 'phone',
    insurance: 'insurance',
    telemedicine: 'telemedicine',
    location: 'location',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const CommitteeMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    image: 'image',
    bio: 'bio',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommitteeMemberScalarFieldEnum = (typeof CommitteeMemberScalarFieldEnum)[keyof typeof CommitteeMemberScalarFieldEnum]


  export const StaffMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    image: 'image',
    type: 'type',
    bio: 'bio',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffMemberScalarFieldEnum = (typeof StaffMemberScalarFieldEnum)[keyof typeof StaffMemberScalarFieldEnum]


  export const ContentBlockScalarFieldEnum: {
    id: 'id',
    page: 'page',
    section: 'section',
    title: 'title',
    content: 'content',
    image: 'image',
    link: 'link',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentBlockScalarFieldEnum = (typeof ContentBlockScalarFieldEnum)[keyof typeof ContentBlockScalarFieldEnum]


  export const ResearchPublicationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    link: 'link',
    category: 'category',
    publishedDate: 'publishedDate',
    authors: 'authors',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResearchPublicationScalarFieldEnum = (typeof ResearchPublicationScalarFieldEnum)[keyof typeof ResearchPublicationScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    link: 'link',
    buttonText: 'buttonText',
    type: 'type',
    isReverse: 'isReverse',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    externalId?: IntFilter<"Doctor"> | number
    name?: StringFilter<"Doctor"> | string
    title?: StringNullableFilter<"Doctor"> | string | null
    specialty?: StringFilter<"Doctor"> | string
    image?: StringNullableFilter<"Doctor"> | string | null
    rating?: FloatNullableFilter<"Doctor"> | number | null
    phone?: StringNullableFilter<"Doctor"> | string | null
    insurance?: BoolFilter<"Doctor"> | boolean
    telemedicine?: BoolFilter<"Doctor"> | boolean
    location?: StringNullableFilter<"Doctor"> | string | null
    active?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Doctor"> | Date | string | null
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    specialty?: SortOrder
    image?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    insurance?: SortOrder
    telemedicine?: SortOrder
    location?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    externalId?: number
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    title?: StringNullableFilter<"Doctor"> | string | null
    specialty?: StringFilter<"Doctor"> | string
    image?: StringNullableFilter<"Doctor"> | string | null
    rating?: FloatNullableFilter<"Doctor"> | number | null
    phone?: StringNullableFilter<"Doctor"> | string | null
    insurance?: BoolFilter<"Doctor"> | boolean
    telemedicine?: BoolFilter<"Doctor"> | boolean
    location?: StringNullableFilter<"Doctor"> | string | null
    active?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Doctor"> | Date | string | null
  }, "id" | "externalId">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    specialty?: SortOrder
    image?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    insurance?: SortOrder
    telemedicine?: SortOrder
    location?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    externalId?: IntWithAggregatesFilter<"Doctor"> | number
    name?: StringWithAggregatesFilter<"Doctor"> | string
    title?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    specialty?: StringWithAggregatesFilter<"Doctor"> | string
    image?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"Doctor"> | number | null
    phone?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    insurance?: BoolWithAggregatesFilter<"Doctor"> | boolean
    telemedicine?: BoolWithAggregatesFilter<"Doctor"> | boolean
    location?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    active?: BoolWithAggregatesFilter<"Doctor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Doctor"> | Date | string | null
  }

  export type CommitteeMemberWhereInput = {
    AND?: CommitteeMemberWhereInput | CommitteeMemberWhereInput[]
    OR?: CommitteeMemberWhereInput[]
    NOT?: CommitteeMemberWhereInput | CommitteeMemberWhereInput[]
    id?: IntFilter<"CommitteeMember"> | number
    name?: StringFilter<"CommitteeMember"> | string
    role?: StringFilter<"CommitteeMember"> | string
    image?: StringNullableFilter<"CommitteeMember"> | string | null
    bio?: StringNullableFilter<"CommitteeMember"> | string | null
    order?: IntFilter<"CommitteeMember"> | number
    active?: BoolFilter<"CommitteeMember"> | boolean
    createdAt?: DateTimeFilter<"CommitteeMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommitteeMember"> | Date | string
  }

  export type CommitteeMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitteeMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommitteeMemberWhereInput | CommitteeMemberWhereInput[]
    OR?: CommitteeMemberWhereInput[]
    NOT?: CommitteeMemberWhereInput | CommitteeMemberWhereInput[]
    name?: StringFilter<"CommitteeMember"> | string
    role?: StringFilter<"CommitteeMember"> | string
    image?: StringNullableFilter<"CommitteeMember"> | string | null
    bio?: StringNullableFilter<"CommitteeMember"> | string | null
    order?: IntFilter<"CommitteeMember"> | number
    active?: BoolFilter<"CommitteeMember"> | boolean
    createdAt?: DateTimeFilter<"CommitteeMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommitteeMember"> | Date | string
  }, "id">

  export type CommitteeMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommitteeMemberCountOrderByAggregateInput
    _avg?: CommitteeMemberAvgOrderByAggregateInput
    _max?: CommitteeMemberMaxOrderByAggregateInput
    _min?: CommitteeMemberMinOrderByAggregateInput
    _sum?: CommitteeMemberSumOrderByAggregateInput
  }

  export type CommitteeMemberScalarWhereWithAggregatesInput = {
    AND?: CommitteeMemberScalarWhereWithAggregatesInput | CommitteeMemberScalarWhereWithAggregatesInput[]
    OR?: CommitteeMemberScalarWhereWithAggregatesInput[]
    NOT?: CommitteeMemberScalarWhereWithAggregatesInput | CommitteeMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommitteeMember"> | number
    name?: StringWithAggregatesFilter<"CommitteeMember"> | string
    role?: StringWithAggregatesFilter<"CommitteeMember"> | string
    image?: StringNullableWithAggregatesFilter<"CommitteeMember"> | string | null
    bio?: StringNullableWithAggregatesFilter<"CommitteeMember"> | string | null
    order?: IntWithAggregatesFilter<"CommitteeMember"> | number
    active?: BoolWithAggregatesFilter<"CommitteeMember"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CommitteeMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommitteeMember"> | Date | string
  }

  export type StaffMemberWhereInput = {
    AND?: StaffMemberWhereInput | StaffMemberWhereInput[]
    OR?: StaffMemberWhereInput[]
    NOT?: StaffMemberWhereInput | StaffMemberWhereInput[]
    id?: IntFilter<"StaffMember"> | number
    name?: StringFilter<"StaffMember"> | string
    role?: StringFilter<"StaffMember"> | string
    image?: StringNullableFilter<"StaffMember"> | string | null
    type?: StringFilter<"StaffMember"> | string
    bio?: StringNullableFilter<"StaffMember"> | string | null
    order?: IntFilter<"StaffMember"> | number
    active?: BoolFilter<"StaffMember"> | boolean
    createdAt?: DateTimeFilter<"StaffMember"> | Date | string
    updatedAt?: DateTimeFilter<"StaffMember"> | Date | string
  }

  export type StaffMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrder
    bio?: SortOrderInput | SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StaffMemberWhereInput | StaffMemberWhereInput[]
    OR?: StaffMemberWhereInput[]
    NOT?: StaffMemberWhereInput | StaffMemberWhereInput[]
    name?: StringFilter<"StaffMember"> | string
    role?: StringFilter<"StaffMember"> | string
    image?: StringNullableFilter<"StaffMember"> | string | null
    type?: StringFilter<"StaffMember"> | string
    bio?: StringNullableFilter<"StaffMember"> | string | null
    order?: IntFilter<"StaffMember"> | number
    active?: BoolFilter<"StaffMember"> | boolean
    createdAt?: DateTimeFilter<"StaffMember"> | Date | string
    updatedAt?: DateTimeFilter<"StaffMember"> | Date | string
  }, "id">

  export type StaffMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrder
    bio?: SortOrderInput | SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffMemberCountOrderByAggregateInput
    _avg?: StaffMemberAvgOrderByAggregateInput
    _max?: StaffMemberMaxOrderByAggregateInput
    _min?: StaffMemberMinOrderByAggregateInput
    _sum?: StaffMemberSumOrderByAggregateInput
  }

  export type StaffMemberScalarWhereWithAggregatesInput = {
    AND?: StaffMemberScalarWhereWithAggregatesInput | StaffMemberScalarWhereWithAggregatesInput[]
    OR?: StaffMemberScalarWhereWithAggregatesInput[]
    NOT?: StaffMemberScalarWhereWithAggregatesInput | StaffMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StaffMember"> | number
    name?: StringWithAggregatesFilter<"StaffMember"> | string
    role?: StringWithAggregatesFilter<"StaffMember"> | string
    image?: StringNullableWithAggregatesFilter<"StaffMember"> | string | null
    type?: StringWithAggregatesFilter<"StaffMember"> | string
    bio?: StringNullableWithAggregatesFilter<"StaffMember"> | string | null
    order?: IntWithAggregatesFilter<"StaffMember"> | number
    active?: BoolWithAggregatesFilter<"StaffMember"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StaffMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffMember"> | Date | string
  }

  export type ContentBlockWhereInput = {
    AND?: ContentBlockWhereInput | ContentBlockWhereInput[]
    OR?: ContentBlockWhereInput[]
    NOT?: ContentBlockWhereInput | ContentBlockWhereInput[]
    id?: IntFilter<"ContentBlock"> | number
    page?: StringFilter<"ContentBlock"> | string
    section?: StringFilter<"ContentBlock"> | string
    title?: StringNullableFilter<"ContentBlock"> | string | null
    content?: StringNullableFilter<"ContentBlock"> | string | null
    image?: StringNullableFilter<"ContentBlock"> | string | null
    link?: StringNullableFilter<"ContentBlock"> | string | null
    order?: IntFilter<"ContentBlock"> | number
    active?: BoolFilter<"ContentBlock"> | boolean
    createdAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ContentBlock"> | Date | string
  }

  export type ContentBlockOrderByWithRelationInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContentBlockWhereInput | ContentBlockWhereInput[]
    OR?: ContentBlockWhereInput[]
    NOT?: ContentBlockWhereInput | ContentBlockWhereInput[]
    page?: StringFilter<"ContentBlock"> | string
    section?: StringFilter<"ContentBlock"> | string
    title?: StringNullableFilter<"ContentBlock"> | string | null
    content?: StringNullableFilter<"ContentBlock"> | string | null
    image?: StringNullableFilter<"ContentBlock"> | string | null
    link?: StringNullableFilter<"ContentBlock"> | string | null
    order?: IntFilter<"ContentBlock"> | number
    active?: BoolFilter<"ContentBlock"> | boolean
    createdAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ContentBlock"> | Date | string
  }, "id">

  export type ContentBlockOrderByWithAggregationInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentBlockCountOrderByAggregateInput
    _avg?: ContentBlockAvgOrderByAggregateInput
    _max?: ContentBlockMaxOrderByAggregateInput
    _min?: ContentBlockMinOrderByAggregateInput
    _sum?: ContentBlockSumOrderByAggregateInput
  }

  export type ContentBlockScalarWhereWithAggregatesInput = {
    AND?: ContentBlockScalarWhereWithAggregatesInput | ContentBlockScalarWhereWithAggregatesInput[]
    OR?: ContentBlockScalarWhereWithAggregatesInput[]
    NOT?: ContentBlockScalarWhereWithAggregatesInput | ContentBlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContentBlock"> | number
    page?: StringWithAggregatesFilter<"ContentBlock"> | string
    section?: StringWithAggregatesFilter<"ContentBlock"> | string
    title?: StringNullableWithAggregatesFilter<"ContentBlock"> | string | null
    content?: StringNullableWithAggregatesFilter<"ContentBlock"> | string | null
    image?: StringNullableWithAggregatesFilter<"ContentBlock"> | string | null
    link?: StringNullableWithAggregatesFilter<"ContentBlock"> | string | null
    order?: IntWithAggregatesFilter<"ContentBlock"> | number
    active?: BoolWithAggregatesFilter<"ContentBlock"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentBlock"> | Date | string
  }

  export type ResearchPublicationWhereInput = {
    AND?: ResearchPublicationWhereInput | ResearchPublicationWhereInput[]
    OR?: ResearchPublicationWhereInput[]
    NOT?: ResearchPublicationWhereInput | ResearchPublicationWhereInput[]
    id?: IntFilter<"ResearchPublication"> | number
    title?: StringFilter<"ResearchPublication"> | string
    description?: StringNullableFilter<"ResearchPublication"> | string | null
    image?: StringNullableFilter<"ResearchPublication"> | string | null
    link?: StringNullableFilter<"ResearchPublication"> | string | null
    category?: StringFilter<"ResearchPublication"> | string
    publishedDate?: DateTimeFilter<"ResearchPublication"> | Date | string
    authors?: StringNullableFilter<"ResearchPublication"> | string | null
    active?: BoolFilter<"ResearchPublication"> | boolean
    createdAt?: DateTimeFilter<"ResearchPublication"> | Date | string
    updatedAt?: DateTimeFilter<"ResearchPublication"> | Date | string
  }

  export type ResearchPublicationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    category?: SortOrder
    publishedDate?: SortOrder
    authors?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearchPublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResearchPublicationWhereInput | ResearchPublicationWhereInput[]
    OR?: ResearchPublicationWhereInput[]
    NOT?: ResearchPublicationWhereInput | ResearchPublicationWhereInput[]
    title?: StringFilter<"ResearchPublication"> | string
    description?: StringNullableFilter<"ResearchPublication"> | string | null
    image?: StringNullableFilter<"ResearchPublication"> | string | null
    link?: StringNullableFilter<"ResearchPublication"> | string | null
    category?: StringFilter<"ResearchPublication"> | string
    publishedDate?: DateTimeFilter<"ResearchPublication"> | Date | string
    authors?: StringNullableFilter<"ResearchPublication"> | string | null
    active?: BoolFilter<"ResearchPublication"> | boolean
    createdAt?: DateTimeFilter<"ResearchPublication"> | Date | string
    updatedAt?: DateTimeFilter<"ResearchPublication"> | Date | string
  }, "id">

  export type ResearchPublicationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    category?: SortOrder
    publishedDate?: SortOrder
    authors?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResearchPublicationCountOrderByAggregateInput
    _avg?: ResearchPublicationAvgOrderByAggregateInput
    _max?: ResearchPublicationMaxOrderByAggregateInput
    _min?: ResearchPublicationMinOrderByAggregateInput
    _sum?: ResearchPublicationSumOrderByAggregateInput
  }

  export type ResearchPublicationScalarWhereWithAggregatesInput = {
    AND?: ResearchPublicationScalarWhereWithAggregatesInput | ResearchPublicationScalarWhereWithAggregatesInput[]
    OR?: ResearchPublicationScalarWhereWithAggregatesInput[]
    NOT?: ResearchPublicationScalarWhereWithAggregatesInput | ResearchPublicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResearchPublication"> | number
    title?: StringWithAggregatesFilter<"ResearchPublication"> | string
    description?: StringNullableWithAggregatesFilter<"ResearchPublication"> | string | null
    image?: StringNullableWithAggregatesFilter<"ResearchPublication"> | string | null
    link?: StringNullableWithAggregatesFilter<"ResearchPublication"> | string | null
    category?: StringWithAggregatesFilter<"ResearchPublication"> | string
    publishedDate?: DateTimeWithAggregatesFilter<"ResearchPublication"> | Date | string
    authors?: StringNullableWithAggregatesFilter<"ResearchPublication"> | string | null
    active?: BoolWithAggregatesFilter<"ResearchPublication"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ResearchPublication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResearchPublication"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    image?: StringFilter<"Service"> | string
    link?: StringFilter<"Service"> | string
    buttonText?: StringFilter<"Service"> | string
    type?: StringFilter<"Service"> | string
    isReverse?: BoolFilter<"Service"> | boolean
    order?: IntFilter<"Service"> | number
    active?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    buttonText?: SortOrder
    type?: SortOrder
    isReverse?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    image?: StringFilter<"Service"> | string
    link?: StringFilter<"Service"> | string
    buttonText?: StringFilter<"Service"> | string
    type?: StringFilter<"Service"> | string
    isReverse?: BoolFilter<"Service"> | boolean
    order?: IntFilter<"Service"> | number
    active?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    buttonText?: SortOrder
    type?: SortOrder
    isReverse?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    image?: StringWithAggregatesFilter<"Service"> | string
    link?: StringWithAggregatesFilter<"Service"> | string
    buttonText?: StringWithAggregatesFilter<"Service"> | string
    type?: StringWithAggregatesFilter<"Service"> | string
    isReverse?: BoolWithAggregatesFilter<"Service"> | boolean
    order?: IntWithAggregatesFilter<"Service"> | number
    active?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type DoctorCreateInput = {
    externalId: number
    name: string
    title?: string | null
    specialty: string
    image?: string | null
    rating?: number | null
    phone?: string | null
    insurance?: boolean
    telemedicine?: boolean
    location?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    externalId: number
    name: string
    title?: string | null
    specialty: string
    image?: string | null
    rating?: number | null
    phone?: string | null
    insurance?: boolean
    telemedicine?: boolean
    location?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorUpdateInput = {
    externalId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    telemedicine?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    externalId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    telemedicine?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorCreateManyInput = {
    id?: number
    externalId: number
    name: string
    title?: string | null
    specialty: string
    image?: string | null
    rating?: number | null
    phone?: string | null
    insurance?: boolean
    telemedicine?: boolean
    location?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorUpdateManyMutationInput = {
    externalId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    telemedicine?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    externalId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    telemedicine?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommitteeMemberCreateInput = {
    name: string
    role: string
    image?: string | null
    bio?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberUncheckedCreateInput = {
    id?: number
    name: string
    role: string
    image?: string | null
    bio?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberCreateManyInput = {
    id?: number
    name: string
    role: string
    image?: string | null
    bio?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberCreateInput = {
    name: string
    role: string
    image?: string | null
    type: string
    bio?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffMemberUncheckedCreateInput = {
    id?: number
    name: string
    role: string
    image?: string | null
    type: string
    bio?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberCreateManyInput = {
    id?: number
    name: string
    role: string
    image?: string | null
    type: string
    bio?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockCreateInput = {
    page: string
    section: string
    title?: string | null
    content?: string | null
    image?: string | null
    link?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockUncheckedCreateInput = {
    id?: number
    page: string
    section: string
    title?: string | null
    content?: string | null
    image?: string | null
    link?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockUpdateInput = {
    page?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    page?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockCreateManyInput = {
    id?: number
    page: string
    section: string
    title?: string | null
    content?: string | null
    image?: string | null
    link?: string | null
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockUpdateManyMutationInput = {
    page?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    page?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchPublicationCreateInput = {
    title: string
    description?: string | null
    image?: string | null
    link?: string | null
    category?: string
    publishedDate?: Date | string
    authors?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResearchPublicationUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    image?: string | null
    link?: string | null
    category?: string
    publishedDate?: Date | string
    authors?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResearchPublicationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchPublicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchPublicationCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    image?: string | null
    link?: string | null
    category?: string
    publishedDate?: Date | string
    authors?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResearchPublicationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchPublicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    title: string
    description: string
    image: string
    link: string
    buttonText: string
    type?: string
    isReverse?: boolean
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    image: string
    link: string
    buttonText: string
    type?: string
    isReverse?: boolean
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isReverse?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isReverse?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyInput = {
    id?: number
    title: string
    description: string
    image: string
    link: string
    buttonText: string
    type?: string
    isReverse?: boolean
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isReverse?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isReverse?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    specialty?: SortOrder
    image?: SortOrder
    rating?: SortOrder
    phone?: SortOrder
    insurance?: SortOrder
    telemedicine?: SortOrder
    location?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    rating?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    specialty?: SortOrder
    image?: SortOrder
    rating?: SortOrder
    phone?: SortOrder
    insurance?: SortOrder
    telemedicine?: SortOrder
    location?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    specialty?: SortOrder
    image?: SortOrder
    rating?: SortOrder
    phone?: SortOrder
    insurance?: SortOrder
    telemedicine?: SortOrder
    location?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CommitteeMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitteeMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type CommitteeMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitteeMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitteeMemberSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type StaffMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type StaffMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    image?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMemberSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ContentBlockCountOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    link?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ContentBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    link?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockMinOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    link?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ResearchPublicationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    category?: SortOrder
    publishedDate?: SortOrder
    authors?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearchPublicationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResearchPublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    category?: SortOrder
    publishedDate?: SortOrder
    authors?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearchPublicationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    category?: SortOrder
    publishedDate?: SortOrder
    authors?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearchPublicationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    buttonText?: SortOrder
    type?: SortOrder
    isReverse?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    buttonText?: SortOrder
    type?: SortOrder
    isReverse?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    buttonText?: SortOrder
    type?: SortOrder
    isReverse?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}