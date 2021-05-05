import Navigation from "./navigation";

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
                {props.children}
            </main>
            <footer className="container flex items-center justify-end mx-auto w-full h-52 text-sm font-light">
                ©︎ UD All rights reserved.
            </footer>
        </div>
    );
}