export interface ChildInput {
  id: string,
  kanji: string,
  kana: string,
  sex: string,
  date: Date
}

export interface ChildOutput {
  kanji: string,
  kana: string,
  sex: string,
  date: Date
}

export class Child {
  kanji: string
  kana: string
  sex: string
  id: string
  date: Date

  constructor(obj: ChildInput) {
    this.kanji = obj.kanji
    this.kana = obj.kana
    this.sex = obj.sex
    this.id = obj.id
    this.date = obj.date
  }

  static createIns(obj: ChildInput): Child {
    if (obj.sex === 'boy') return new Boy(obj)
    if (obj.sex === 'girl') return new Girl(obj)
    return new Child(obj)
  }
  getSexSymbol(): string {
    return '?'
  }
  getRowColor(): string {
    return 'table-success'
  }
  getOutput(): ChildOutput {
    return {
      kanji: this.kanji,
      kana: this.kana,
      sex: this.sex,
      date: this.date,
    }
  }
}

class Boy extends Child {
  getSexSymbol(): string {
    return '♂'
  }
  getRowColor(): string {
    return 'table-info'
  }
}

class Girl extends Child {
  getSexSymbol(): string {
    return '♀'
  }
  getRowColor(): string {
    return 'table-danger'
  }
}
