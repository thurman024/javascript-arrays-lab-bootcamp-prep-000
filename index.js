const app = "I don't do much."

function destructivelyAppendKitten(kitten) {
  kittens.shift(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return kittens
}
