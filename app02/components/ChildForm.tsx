import { SyntheticEvent, useRef, useState } from "react";
import * as operation from "ducks/child/operation";
import { callToast } from 'lib/toast';
import * as api from 'ducks/child/api'

export default function ChildForm() {
  const kanjiRef = useRef<HTMLInputElement>(null)
  const kanaRef = useRef<HTMLInputElement>(null)
  const [sexState, setSexState] = useState('boy')

  const handleChange = (e: SyntheticEvent) => {
    setSexState((e.target as HTMLInputElement).value)
  }

  const handleClick = async () => {
    if (!kanjiRef.current?.value || !kanaRef.current?.value) {
      alert('未入力の項目があります。')
      return
    }
    const children = await api.getChildren()
    if (children.length >= 10) {
      alert('10個まで登録できます。')
      return
    }

    const newChild = {
      id: '',
      kanji: kanjiRef.current.value,
      kana: kanaRef.current.value,
      sex: sexState,
      timestamp: Date.now()
    }
    await operation.addChild(newChild)

    // 初期化
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


