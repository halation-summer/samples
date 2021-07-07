import { useSelector } from "react-redux";
import * as operation from "ducks/child/operation";
import { Child, SuperChild } from "ducks/child/entity";
import { selectChildren } from "ducks/child/selector";
import { callToast } from 'lib/toast';

export default function ChildList() {
  const children = useSelector(selectChildren);

  const handleDelete = async (targetChild: Child) => {
    await operation.deleteChild(targetChild)
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
        {children.map((child: Child, index: number) => (
        <tr key={index} className={SuperChild.factory(child).getRowColor()}>
          <td className="align-middle">{SuperChild.factory(child).getSexSymbol()}</td>
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




