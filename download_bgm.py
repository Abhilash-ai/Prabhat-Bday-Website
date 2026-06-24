import urllib.request

url = "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3"
output = "public/assets/bgm.mp3"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

print(f"Downloading from {url} to {output}...")
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        with open(output, 'wb') as f:
            f.write(response.read())
    print("Download completed successfully!")
except Exception as e:
    print(f"Error occurred: {e}")
