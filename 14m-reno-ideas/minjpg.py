import os
from PIL import Image, ImageOps

input_dir = './14M/NewPhotos'
output_dir = './build/images'

# Ensure the build directory exists
os.makedirs(output_dir, exist_ok=True)

# Loop through every file in the folder
for filename in os.listdir(input_dir):
    # Only process files that are JPEGs
    if filename.lower().endswith(('.jpg', '.jpeg')):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, filename)
        
        try:
            with Image.open(input_path) as img:
                # 1. Fix the EXIF rotation
                img = ImageOps.exif_transpose(img)
                
                # 2. Save with optimizations
                img.save(
                    output_path, 
                    "JPEG", 
                    quality=20, 
                    progressive=True, 
                    optimize=True
                )
            print(f"✅ Optimized: {filename}")
            
        except Exception as e:
            print(f"❌ Failed on {filename}: {e}")

print("Finished processing all photos!")