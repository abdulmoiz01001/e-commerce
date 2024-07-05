import React, { useEffect , useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useDispatch , useSelector } from 'react-redux'
import { addProducts } from '../lib/store/features/productsSlice/productsSlice'
import { clearProducts } from '../lib/store/features/productsSlice/productsSlice'



const ProductsComp = () => {
    const dispatch = useDispatch()
    const Filtered = useSelector((state) => state.filtered.filtered) ?? []
    console.log(Filtered)

    useEffect(() => {
        console.log(" filtered" , Filtered)
    }, [Filtered])
  
    const toast = useToast()
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser') ?? false;
        if (!loginUser || loginUser === false) {
            navigate('/login')
        }
    }, [])

const fetchData = async () => {
   try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      dispatch(clearProducts())
        setProducts(data)
        data.map((product) => {
            console.log(product)
            dispatch(addProducts(product))
        })
      console.log(data)
   }
    catch (error) {
        console.log(error)
    }
}

    useEffect(() => {
        fetchData()
    }, [])


    const setCart = (id) => {
        const ID = parseInt(id);
        console.log(ID);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const already = cart.find((product) => product === ID);
        if (already) {
            toast({
                title: `Product is already in cart`,
                position: 'top',
                isClosable: true,
            })
            return;
        }
        cart = [...cart,ID];
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        toast({
            title: `Product has been added to cart`,
            position: 'top',
            isClosable: true,
        })
    }


  return (
    <>
    <div className='w-full h-full mt-32 flex gap-4 justify-evenly items-center flex-wrap' >
    {
        Filtered.length > 0 ? (<>
        {Filtered.map((product, index) => (
           <Card maxW='sm'>
           <CardBody>
             <Image
               src={product.image}
               alt='Green double couch with wooden legs'
               className=' object-cover  'w={300} h={300}
               borderRadius='lg'
             />
             <Stack mt='6' spacing='3'>
               <Heading size='md'>{product.title}</Heading>
               <details>
                 <summary>Product Description</summary>
                 <Text>
                {product.description}
               </Text>
               </details>
             
               <Text color='blue.600' fontSize='2xl'>
                 RS-{product.price}
               </Text>
             </Stack>
           </CardBody>
           <Divider />
           <CardFooter>
             <ButtonGroup spacing='2'>
                 <Link to={`/product/${product.id}`} >
               <Button variant='solid' colorScheme='blue'>
                 Buy now
               </Button>
                 </Link>
                
               <Button onClick={()=>{setCart(product.id)}} variant='ghost' colorScheme='blue'>
                 Add to cart
               </Button>
                
             </ButtonGroup>
           </CardFooter>
         </Card>
                 ))}
       
       </>) : (products.map((product, index) => (
            <Card maxW='sm'>
  <CardBody>
    <Image
      src={product.image}
      alt='Green double couch with wooden legs'
      className=' object-cover  'w={300} h={300}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.title}</Heading>
      <details>
        <summary>Product Description</summary>
        <Text>
       {product.description}
      </Text>
      </details>
    
      <Text color='blue.600' fontSize='2xl'>
        RS-{product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
        <Link to={`/product/${product.id}`} >
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
        </Link>
       
      <Button onClick={()=>{setCart(product.id)}} variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
       
    </ButtonGroup>
  </CardFooter>
</Card>
        ))
  )  }

    </div>
    </>
  )
}

export default ProductsComp