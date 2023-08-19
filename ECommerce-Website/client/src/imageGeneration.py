import base64
import os
import requests
from PIL import Image
from io import BytesIO

engine_id = "stable-diffusion-xl-1024-v1-0"
api_host = os.getenv('API_HOST', 'https://api.stability.ai')
api_key = "sk-ePUKizjq27FYmkzLBRbTMU5hMGOMrClZvDouCho23pxWESs2"  # Replace with your actual API key

if api_key is None:
    raise Exception("Missing Stability API key.")

response = requests.post(
    f"{api_host}/v1/generation/{engine_id}/text-to-image",
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    },
    json={
        "text_prompts": [
            {
                "text": "Create an image depicting a pair of tan slip-on sneakers. These sneakers strike a perfect balance between comfort and style, seamlessly blending casual charm with contemporary trends. The tan color exudes a warm and versatile appeal, making it an ideal match for a variety of outfits. Capture the slip-on design, emphasizing its practicality while maintaining a modern aesthetic. Showcase the sneakers' well-crafted sole, designed for a comfortable stride that offers both support and flexibility. Highlight the blend of smooth and textured surfaces that adds depth to the overall look, with subtle stitching accents and tasteful branding elements contributing to their visual appeal. Situate the sneakers within a casual setting, suggesting their adaptability for everyday wear, from errands to relaxed outings. Infuse the image with a sense of trendiness, reflecting the current popularity of the tan color. The sneakers should exude comfort and a touch of sophistication, embodying the essence of a versatile and fashion-forward footwear choice. Let the image reflect the sneakers' ability to effortlessly complement various outfits while maintaining their own distinct style."
            }
        ],
        "cfg_scale": 7,
        "height": 1024,
        "width": 1024,
        "samples": 1,
        "steps": 30,
    },
)

if response.status_code != 200:
    raise Exception("Non-200 response: " + str(response.text))

data = response.json()

# Create the 'out' directory if it doesn't exist
# os.makedirs("out", exist_ok=True)

for i, image in enumerate(data["artifacts"]):
    with open(f"./out/v1_txt2img_{i}.png", "wb") as f:
        f.write(base64.b64decode(image["base64"]))
    
    # Display the generated image
    img_data = base64.b64decode(image["base64"])
    img = Image.open(BytesIO(img_data))
    img.show()
