const { someoneHasAnAceOfSpade } = require("./cards")

describe("Quiz!", () => {
  it("Returns true when someone has an ace of space", () => {
    const hands = [
      [{ suit: "♠︎", rank: "A" }, { suit: "♣︎", rank: "Q" }],
      [{ suit: "♥", rank: "4" }, { suit: "◆", rank: "7" }],
      [{ suit: "◆", rank: "A" }, { suit: "♠︎", rank: "K" }]
    ];

    expect(someoneHasAnAceOfSpade(hands)).toBe(true)
  });

  it("Returns false when someone doesn't have an ace of space", () => {
    const hands = [
      [{ suit: "♠︎", rank: "J" }, { suit: "♥", rank: "7" }],
      [{ suit: "◆", rank: "3" }, { suit: "♣︎", rank: "7" }],
      [{ suit: "♠︎", rank: "2" }, { suit: "◆", rank: "J" }]
    ];

    expect(someoneHasAnAceOfSpade(hands)).toBe(false)
  });
});
