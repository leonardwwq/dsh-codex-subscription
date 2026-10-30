import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('erase mode and the resize menu keep Escape and keys to themselves', async () => {
  const viewer = await read('src/subscription-image-viewer.jsx')
  const styles = await read('src/subscription-image-viewer-styles.js')
  assert.match(viewer, /eraseRef\.current\.erasing !== undefined[\s\S]*?event\.key === 'Escape'[\s\S]*?setErasing\(undefined\)[\s\S]*?return/u)
  assert.match(viewer, /\(event\.ctrlKey \|\| event\.metaKey\) && key === 'z'/u)
  assert.match(viewer, /event\.key === '\[' \|\| event\.key === '\]'/u)
  assert.match(viewer, /window\.addEventListener\('keydown', onKeyDown, true\)/u)
  assert.match(viewer, /window\.addEventListener\('pointerdown', onPointerDown, true\)/u)
  assert.match(viewer, /setSendFailed\(true\)/u)
  assert.match(viewer, /className="dcsiv-brush-cursor"/u)
  assert.match(styles, /\.dcsiv-brush-cursor\{position:fixed/u)
  assert.match(styles, /\.dcsiv-button\[data-state="failed"\]/u)
})
