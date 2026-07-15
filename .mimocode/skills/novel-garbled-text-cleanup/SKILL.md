---
name: novel-garbled-text-cleanup
description: Clean anti-piracy watermark garbled text from Chinese novel TXT files. Uses pattern matching and context-aware detection — never character frequency filtering.
---

# Novel Garbled Text Cleanup

Clean anti-piracy watermark injections from Chinese novel `.txt` files in the `book/` directory.

## Critical rules

1. **NEVER use character frequency filtering** — legitimate Chinese characters may appear only a few times in a file; frequency-based deletion destroys content catastrophically.
2. **Work on a copy** — always create a backup before cleaning: `cp "file.txt" "file.txt.bak"`
3. **Preserve all normal text** — do not rewrite, summarize, or adjust punctuation. Only remove clearly garbled content.
4. **One-line operations only** — Python regex that strips `\n` between CJK characters will merge lines. Always operate within single lines.

## Garbled text types

### Type 1: Watermark signatures
Pattern: `月漪`/`越漪`/`玥漪`/`阅漪` followed by format characters (`/`, `*`, `#`, `_`, `-`, `%`)
- Match and remove the watermark signature and its surrounding context
- **Protect** the legitimate word `涟漪` (use placeholder before matching)

### Type 2: Rare character sequences
Extended rare character set: `镹俬儛弍踆翏罒氿覇裠箘厁玐貳羣熘`
Special numbers: `〇`, `①⑩`, `⑴⑽`, `𝟬𝟵`
Standalone radicals (never appear independently in normal text): `亻` (U+4EBB), `氵` (U+6C35), `衤` (U+8863)

### Type 3: Specific garbled patterns
Match these known patterns with regex:
- `祁镏` + following content
- `栮二洱`
- `旗51　八）`
- `児陵（二）侕`
- `伊笼旗拔泗鳍咝呜刘`
- `一祁　韭`
- Standalone garbled lines containing the above patterns

## Cleanup algorithm

1. **Backup**: copy original file
2. **Protect** `涟漪` → temporary placeholder
3. **Remove watermark signatures** (Type 1)
4. **Detect garbled positions** using rare characters + standalone radicals (Type 2)
5. **Expand from garbled positions** outward (window=2 characters each side) to catch adjacent garbled content
6. **Match specific patterns** (Type 3) and remove
7. **Detect standalone garbled lines** — lines where garbled content dominates
8. **Restore** `涟漪` placeholder
9. **Verify**: count remaining garbled indicators with `grep -c`, read suspicious areas manually

## Detection helper script

```python
import re

RARE_CHARS = set('镹俬儛弍踆翏罒氿覇裠箘厁玐貳羣熘')
SPECIAL_NUMS = set('①②③④⑤⑥⑦⑧⑨⑩⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽')
MATH_DIGITS = set('𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵')
ALL_GARBLED = RARE_CHARS | SPECIAL_NUMS | MATH_DIGITS | set('〇')
STANDALONE_RADICALS = set('亻氵衤')

def is_garbled_char(ch):
    return ch in ALL_GARBLED or ch in STANDALONE_RADICALS

def find_garbled_positions(text):
    return [i for i, ch in enumerate(text) if is_garbled_char(ch)]
```

## Verification

After cleaning:
```bash
grep -c '镹\|俬\|儛\|弍\|踆\|翏\|罒\|氿\|覇\|裠\|箘\|厁\|玐\|貳\|羣\|熘' "file.txt"
```
Target: 0 remaining garbled indicators.
