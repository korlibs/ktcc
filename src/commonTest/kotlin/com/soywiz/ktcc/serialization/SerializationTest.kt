package com.soywiz.ktcc.serialization

/*
import com.soywiz.ktcc.parser.Program
import kotlinx.serialization.*
import kotlinx.serialization.internal.ArrayListSerializer
import kotlinx.serialization.internal.SerialClassDescImpl
import kotlinx.serialization.json.Json
import kotlinx.serialization.protobuf.ProtoBuf
import kotlin.reflect.KClass
import kotlin.test.Test

class SerializationTest {
    @ImplicitReflectionSerializer
    @Test
    fun test() {
        val data = ProtoBuf.dump(Data(B(10)))
        println(data.toList())
        //println(ProtoBuf.load<Data>(data))
        //val jsonData = Json.stringify(Data::class.serializer(), Data(42))
        //println("jsonData: $jsonData")

        //Program(listOf())
    }
}

@Serializable
open class A

@Serializable
data class B(val v: Int) : A() {
    //@ImplicitReflectionSerializer
    //companion object
    //{
    //    init { PolymorphicSerializer.registerSerializer( B::class, B::class.serializer(), "com.soywiz.ktcc.serialization.B" ) }
    //}
}


//@Serializable
//open class C(val c: Int) : A()

@Serializable
data class Data(
        @Serializable( PolymorphicSerializer::class )
        val a: A
)












/////////////

/**
 * The serialization description for [PolymorphicSerializer].
 */
object PolymorphicSerializerClassDesc : SerialClassDescImpl( "kotlin.Any" )
{
    override val kind: SerialKind = UnionKind.POLYMORPHIC

    init
    {
        addElement( "klass" )
        addElement( "value" )
    }
}


/**
 * A serializer which can (de)serialize registered polymorph types by including type information in the serialized representation (supporting multiplatform).
 *
 * This is a custom version of the PolymorphicSerializer included in `kotlinx.serialization` which relies on types being registered manually.
 * This allows this serializer to also be used when targeting a JavaScript runtime (the normal PolymorphicSerializer is only supported on JVM).
 *
 * The downsides are (due to the fact that the JavaScript runtime does not have access to fully qualified class names):
 * (1) all types that need to be serialized need to be registered by passing their fully qualified name manually.
 * (2) no types with the same name can be registered.
 */
object PolymorphicSerializer : KSerializer<Any>
{
    override val descriptor: SerialDescriptor = PolymorphicSerializerClassDesc

    private val simpleNameSerializers = mutableMapOf<String, KSerializer<Any>>()
    private val qualifiedSerializers = mutableMapOf<String, KSerializer<Any>>()


    fun <T: Any> registerSerializer(klass: KClass<T>, serializer: KSerializer<T>, qualifiedName: String )
    {
        val className: String = klass.simpleName!!
        @Suppress( "UNCHECKED_CAST" )
        val anySerializer = serializer as KSerializer<Any>

        // Cannot register duplicate class names.
        val error = "For now, polymorphic serialization in JavaScript does not allow duplicate class names."
        if ( simpleNameSerializers.containsKey( className ) )
        {
            throw IllegalArgumentException( "A class with the name '$className$' is already registered. $error" )
        }
        if ( qualifiedSerializers.containsKey( qualifiedName ) )
        {
            throw IllegalArgumentException( "A class with the qualified name '$qualifiedName' is already registered. $error" )
        }

        simpleNameSerializers[ className ] = anySerializer
        qualifiedSerializers[ qualifiedName ] = anySerializer
    }

    fun getSerializerBySimpleClassName( className: String ): KSerializer<Any>
    {
        if ( !simpleNameSerializers.containsKey( className ) )
        {
            throw NoSuchElementException( "No polymorphic serializer is registered for the class '$className'." )
        }

        return simpleNameSerializers[ className ]!!
    }

    fun getSerializerByQualifiedName( qualifiedName: String ): KSerializer<Any>
    {
        if ( !isSerializerByQualifiedNameRegistered( qualifiedName ) )
        {
            throw NoSuchElementException( "No polymorphic serializer is registered with the qualified name '$qualifiedName'." )
        }

        return qualifiedSerializers[ qualifiedName ]!!
    }

    fun isSerializerByQualifiedNameRegistered( qualifiedName: String ): Boolean
    {
        return qualifiedSerializers.containsKey( qualifiedName )
    }

    override fun serialize( output: Encoder, obj: Any )
    {
        val saver = getSerializerBySimpleClassName( obj::class.simpleName!! )

        @Suppress( "NAME_SHADOWING" )
        val output = output.beginStructure( descriptor )
        output.encodeStringElement( descriptor, 0, saver.descriptor.name )
        output.encodeSerializableElement( descriptor, 1, saver, obj )
        output.endStructure( descriptor )
    }

    override fun deserialize( input: Decoder ): Any
    {
        @Suppress( "NAME_SHADOWING" )
        val input = input.beginStructure( descriptor )
        var klassName: String? = null
        var value: Any? = null
        mainLoop@ while ( true )
        {
            when ( input.decodeElementIndex( descriptor ) )
            {
                CompositeDecoder.READ_ALL ->
                {
                    klassName = input.decodeStringElement( descriptor, 0 )
                    val loader = getSerializerByQualifiedName( klassName )
                    value = input.decodeSerializableElement( descriptor, 1, loader )
                    break@mainLoop
                }
                CompositeDecoder.READ_DONE ->
                {
                    break@mainLoop
                }
                0 ->
                {
                    klassName = input.decodeStringElement( descriptor, 0 )
                }
                1 ->
                {
                    klassName = requireNotNull( klassName ) { "Cannot read polymorphic value before its type token" }
                    val loader = getSerializerByQualifiedName( klassName )
                    value = input.decodeSerializableElement( descriptor, 1, loader )
                }
                else -> throw SerializationException( "Invalid index" )
            }
        }

        input.endStructure( descriptor )
        return requireNotNull( value ) { "Polymorphic value have not been read" }
    }
}


/**
 * A serializer for polymorphic [List]'s relying on the [PolymorphicSerializer] (supporting multiplatform).
 */
object PolymorphicArrayListSerializer : KSerializer<List<Any>> by ArrayListSerializer( PolymorphicSerializer )
*/
