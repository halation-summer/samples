import { Child } from "stores/child/entity";
import { useRef, useState } from "react";
import { addChildAc } from "stores/child/action-creator";
import { callToast } from 'lib/toast';
import { getChildrenApi } from 'stores/child/api-accessor'

export default function ChildForm() {
  const kanjiRef = useRef('')
  const kanaRef = useRef('')
  const [sexState, setSexState] = useState('boy')

  // 性別ラジオボタンの制御
  const handleChange = e => {
    setSexState(e.target.value)
  }

  // 名前追加ボタン押下時の制御
  const handleClick = async () => {
    // 検証
    if (kanjiRef.current.value === '' || kanaRef.current.value === '') {
      alert('未入力の項目があります。')
      return
    }

    // 子供データの取得
    let children
    try {
      children = await getChildrenApi()
    } catch(err) {
      alert(err)
      return
    }

    // 検証
    if (children.length >= 10) {
      alert('10個まで登録できます。')
      return
    }

    // 子供データの追加
    const newChild = Child.createIns({
      kanji: kanjiRef.current.value,
      kana: kanaRef.current.value,
      sex: sexState,
      date: new Date()
    })
    try {
      await addChildAc(newChild)
    } catch(err) {
      alert(err)
      return
    }

    // フォームの初期化
    kanjiRef.current.value = ''
    kanaRef.current.value = ''
    setSexState('boy')

    callToast('追加しました。')
  }

  return (
    <div className="form-inline">
      <label><input name="sex" type="radio" value="boy" className="" onChange={handleChange} checked={sexState === 'boy'}/><span className="ml-1">男</span></label>
      <label><input name="sex" type="radio" value="girl" className="ml-1" onChange={handleChange} checked={sexState === 'girl'}/><span className="ml-1">女</span></label>
      <input className="form-control ml-2" style={{maxWidth: '150px'}} placeholder="漢字" name="kanji" ref={kanjiRef}/>
      <input className="form-control ml-2" style={{maxWidth: '200px'}} placeholder="かな" name="kana" ref={kanaRef}/>
      <button className="btn btn-dark ml-2" type="button" onClick={handleClick}>名前追加</button>
    </div>
  );
}


