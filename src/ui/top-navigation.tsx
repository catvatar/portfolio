import TopNavigationWrapper from '../components/top-navigation-wrapper';
import BackElement from '../components/back-element';
import MenuButton from '../components/menu-button';

export default function TopNavigation() {
  return (
    <TopNavigationWrapper>
      <div className='grid grid-flow-col justify-stretch content-center h-full px-4'>
        <div className='judtify-self-start'>
          Aleksander Gogol
        </div>
        <BackElement />
        <div className='flex justify-end'>
          <MenuButton />
        </div>
      </div>
    </TopNavigationWrapper>
  );
}