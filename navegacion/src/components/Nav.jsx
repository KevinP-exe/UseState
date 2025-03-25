import React from "react";

const Nav = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/calculator" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/components" className="hover:text-gray-200">
                            Componentes
                        </a>
                    </li>
                    <li>
                        <a href="/todolist" className="hover:text-gray-200">
                            To Do List
                        </a>
                    </li>
                    <li>
                        <a href="/studentlist" className="hover:text-gray-200">
                            Student List
                        </a>
                    </li>
                    <li>
                        <a href="/studentcard" className="hover:text-gray-200">
                            Student Card
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;