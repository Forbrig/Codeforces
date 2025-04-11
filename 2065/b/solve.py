import sys
import string

latin_letters = string.ascii_lowercase

def solve(lines):
  for word in lines:
    word = word.strip() # Remove the newline character
    if all(char in latin_letters for char in word):
      print(len(recursive(word)))

def recursive(word):
  if len(word) > 1:
    for i in range(len(word) - 1):
      if word[i] == word[i+1]:
        if len(word) == 2:
          return word[0]
        elif i == 0:
          return recursive(word[:i] + word[i+2] + word[i+2:])
        elif i < len(word) - 1:
          return recursive(word[:i] + word[i-1] + word[i+2:])
  return word

lines = sys.stdin.readlines()
solve(lines)