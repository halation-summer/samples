export class Child {
  constructor(obj) {
    this.kanji = obj.kanji ?? ''
    this.kana = obj.kana ?? ''
    this.sex = obj.sex ?? ''
    this.id = obj.id ?? ''
    this.date = obj.date ?? null
  }
  static createIns(obj) {
    if (obj.sex === 'boy') return new Boy(obj)
    if (obj.sex === 'girl') return new Girl(obj)
    return new Child(obj)
  }
  getSexSymbol() {
    return '?'
  }
  getRowColor() {
    return 'table-success'
  }
  getApiFmtData() {
    return {
      kanji: this.kanji,
      kana: this.kana,
      sex: this.sex,
      date: this.date,
    }
  }
}

class Boy extends Child {
  getSexSymbol() {
    return '♂'
  }
  getRowColor() {
    return 'table-info'
  }
}

class Girl extends Child {
  getSexSymbol() {
    return '♀'
  }
  getRowColor() {
    return 'table-danger'
  }
}

export default {
  Child
}
