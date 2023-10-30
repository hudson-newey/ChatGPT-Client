export default function ChatInput(): JSX.Element {
    return (
        <div>
            <input type="text" className="text-gray-50 bg-gray-700 p-2 rounded rounded-r-none border-r-0 border border-gray-600" />
            <button type="submit" className="text-gray-50 bg-gray-700 p-2 rounded rounded-l-none border border-gray-600 hover:border-gray-300">Go</button>
        </div>
    );
}
