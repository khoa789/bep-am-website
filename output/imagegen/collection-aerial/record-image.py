"""Save a built-in generation result and update its provenance record."""
import hashlib, json, pathlib, shutil, struct, sys
folder=pathlib.Path(__file__).resolve().parent
manifest_path=folder/'manifest.json'
manifest=json.loads(manifest_path.read_text())
images=[image for collection in manifest['collections'] for image in collection['images']]
index=int(sys.argv[1]); source=pathlib.Path(sys.argv[2]); item=images[index]
target=folder/item['file']
if target.exists():
 raise SystemExit(f'Image already saved: {target}')
data=source.read_bytes()
if data[:8]!=b'\x89PNG\r\n\x1a\n': raise SystemExit('Expected PNG')
width,height=struct.unpack('>II',data[16:24])
target.parent.mkdir(parents=True,exist_ok=True)
shutil.copy2(source,target)
item.update(status='generated',width=width,height=height,sha256=hashlib.sha256(data).hexdigest())
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print(f'Saved {index+1}/{len(images)}: {item["file"]}')
