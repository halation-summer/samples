import styles from 'styles/Home.module.css'
import ChildList from 'components/ChildList'
import ChildForm from 'components/ChildForm'
import store from 'ducks/store'
import { Provider } from "react-redux";
import * as operation from "ducks/child/operation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastCont } from 'lib/toast';

export default function Home() {
  operation.getChildren()

  return (
    <div className={styles.container} style={{fontFamily: 'cursive'}}>
      <h1 style={{letterSpacing: '0.1em'}}>赤ちゃんの名前候補</h1>
      <div className="mb-3">閃いた良い名前の備忘録</div>
      <Provider store={store}>
        <ChildList/>
        <ChildForm/>
      </Provider>
      <ToastCont/>
    </div>
  )
}


