interface ImageLoadProgress {
    url: string;
    status: boolean;
}

function monitorImageLoadProgress(): Promise<ImageLoadProgress[]> {
    const divsWithBackgroundImages = Array.from(document.querySelectorAll('div[style*="background-image"]')) as HTMLDivElement[];
    const imagePromises: Promise<ImageLoadProgress>[] = [];
    divsWithBackgroundImages.forEach(div => {
        const backgroundImageURL = div.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
        const imagePromise = new Promise<ImageLoadProgress>((resolve, reject) => {
            const image = new Image();
            image.src = backgroundImageURL;
            image.onload = () => {
               console.log(div);
               resolve ({
                    url: backgroundImageURL,
                    status: true
                })
            };
            image.onerror = () => {
                reject(`Failed to load image: ${backgroundImageURL}`);
            };
        });
        imagePromises.push(imagePromise);
    });
    return Promise.all(imagePromises);
}
export default{
    monitorImageLoadProgress
}