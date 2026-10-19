
import MovingContainer from './MovingContainer';
import set1 from '../assets/images/set1.png'

const Page2 = () => {
  return (
    <div className='bg-black h-screen uppercase flex flex-col justify-center' data-scroll data-scroll-speed='0.3'>
      <img src={set1} className='size-full object-cover absolute' alt="" />
      <MovingContainer title='converse'/>
      <MovingContainer title='nike nfl'/>
      <MovingContainer title='mineral'/>
      <MovingContainer title='future world'/>
      <MovingContainer title='beyonce'/>
    </div>
  )
}

export default Page2
