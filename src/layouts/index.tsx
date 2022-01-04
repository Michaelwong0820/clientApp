import styles from './index.less';
import { MenuBar } from '@/components';
import { useLocation } from 'umi';

export default function IndexPage(props: any) {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];
  return (
    <div>
      {/* <h1 className={styles.title}>Page index</h1> */}
      {props.children}
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
    </div>
  );
}
