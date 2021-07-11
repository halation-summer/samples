import { useSelector } from "react-redux";
import { deleteChildAc } from "stores/child/action-creator";
import { callToast } from 'lib/toast';

export default function ChildList() {
  const children = useSelector(state => state.children);

  // 削除ボタン押下時の制御
  const handleDelete = async targetChild => {
    if (window.confirm('削除しますか？') === false) return

    // 子供データの削除
    try {
      await deleteChildAc(targetChild)
    } catch(err) {
      alert(err)
      return
    }

    callToast('削除しました。')
  }

  return (
    <table className="table table-sm table-bordered text-center" style={{maxWidth: '500px'}}>
      <thead className="table-dark">
        <tr>
          <td style={{width: '15%'}}>性別</td>
          <td style={{width: '25%'}}>漢字</td>
          <td style={{width: '45%'}}>かな</td>
          <td style={{width: '15%', border: 'none', backgroundColor: 'white', color: 'black'}}>操作</td>
        </tr>
      </thead>
      <tbody>
        {children.map((child, index) => (
        <tr key={index} className={child.getRowColor()}>
          <td className="align-middle">{child.getSexSymbol()}</td>
          <td className="align-middle">{child.kanji}</td>
          <td className="align-middle">{child.kana}</td>
          <td style={{border: 'none', backgroundColor: 'white'}}>
            <button className="btn btn-secondary btn-sm" onClick={() => handleDelete(child)}>削除</button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}
