export default function LandscapeImage() {
    return (
        <div className="flex-1 w-full h-[calc(100vh-80px)] flex items-center justify-center p-4">
            <img
                src="/landscape.png"
                alt="BISHENG Industry Landscape Map"
                className="w-full h-full object-contain rounded-xl"
            />
        </div>
    );
}
