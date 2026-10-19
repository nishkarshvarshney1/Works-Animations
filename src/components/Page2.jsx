
import MovingContainer from './MovingContainer';

const Page2 = () => {
  return (
    <div className='bg-black h-screen uppercase flex flex-col justify-center' data-scroll data-scroll-speed='0.3'>
      <MovingContainer title='converse'/>
      <MovingContainer title='nike nfl'/>
      <MovingContainer title='mineral'/>
      <MovingContainer title='future world'/>
      <MovingContainer title='beyonce'/>
    </div>
  )
}

export default Page2
