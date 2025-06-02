# write a program to count words, vowel, consent,digit and symbols in given string.
'''
steps:
1. get input from user
2. Define counters for words, vowels, consonants, digits, and symbols
3. Define sets for vowels, consonants, and digits
4. for char in text:
    if char in vowels:
        veowel_count += 1
    elif char in consonants:
        consonant_count += 1
    elif char in digits:
        digit_count += 1
    elif char == " ":
        word_count += 1
    else:
        symbol_count += 1
5. print the counts
'''
text = input("Enter a string: ")

word_count = 1
vowel_count = 0
consonant_count = 0
digit_count = 0
symbol_count = 0

vowels = "aeiouAEIOU"
consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
digits = "0123456789"

for char in text:
    if char in vowels:
        vowel_count += 1
    elif char in consonants:
        consonant_count += 1
    elif char in digits:
        digit_count += 1
    elif char == " ":
        word_count += 1
    else:
        symbol_count += 1
print(f"Words: {word_count}")
print(f"Vowels: {vowel_count}")
print(f"Consonants: {consonant_count}")
print(f"Digits: {digit_count}")
print(f"Symbols: {symbol_count}")