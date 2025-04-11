# python solve.py < input.txt

import sys

def solve(lines):
  for word in lines:
    word = word.strip() # Remove the newline character
    if word.endswith("us"):
      print(word[:-2] + "i")


lines = sys.stdin.readlines()
solve(lines)