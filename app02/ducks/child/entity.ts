export interface Child {
  id: string,
  kanji: string,
  kana: string,
  sex: string,
  timestamp: number
}

export interface ChildOutput {
  kanji: string,
  kana: string,
  sex: string,
  timestamp: number
}

export class SuperChild {
  kanji: string
  kana: string
  sex: string
  id: string
  timestamp: number

  constructor(obj: Child) {
    this.kanji = obj.kanji
    this.kana = obj.kana
    this.sex = obj.sex
    this.id = obj.id
    this.timestamp = obj.timestamp
  }

  static factory(obj: Child) {
    if (obj.sex === 'boy') return new Boy(obj)
    if (obj.sex === 'girl') return new Girl(obj)
    return new SuperChild(obj)
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
      timestamp: this.timestamp,
    }
  }
}

class Boy extends SuperChild {
  getSexSymbol(): string {
    return '♂'
  }
  getRowColor(): string {
    return 'table-info'
  }
}

class Girl extends SuperChild {
  getSexSymbol(): string {
    return '♀'
  }
  getRowColor(): string {
    return 'table-danger'
  }
}
