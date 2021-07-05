export default function Contact() {
    return (
        <div className="max-w-screen-lg mx-auto mt-8">
            <div className='flex items-center'>
                <h1 className='w-16 pb-3 text-5xl text-gray-800 font-thin'>
                    Contact
                </h1>
            </div>
            <div className='mt-16 mx-auto max-w-screen-lg'>
                <p>お気軽にご連絡ください</p>
                <form>
                    <div className='mt-5'>
                        <p>お名前</p>
                        <input className='w-96 p-1 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-400' type="text" name="name" id="name"required/>
                    </div>
                    <div className='mt-5'>
                        <p>メールアドレス</p>
                        <input className='w-96 p-1 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-400' type="email" name="email" id="email" required/>
                    </div>
                    <div className='mt-5'>
                        <p>お問い合わせ内容</p>
                        <textarea className='w-96 p-1 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-400' type="message" rows="10" id="textarea" required></textarea>
                    </div>
                    <button className="mt-8 py-2 px-5 text-sm bg-gray-200 border rounded hover:bg-gray-300" type="submit">内容を送信</button>
                </form>
            </div>
        </div>
    );
}
