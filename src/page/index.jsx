import React, { useEffect } from "react";





const Home = () => {
    useEffect(() => {
        const menuBtn = document.getElementById('menuBtn');
        const sideNav = document.getElementById('sideNav');

        menuBtn.addEventListener('click', () => {
            sideNav.classList.toggle('hidden'); 
        });

        return () => {
            menuBtn.removeEventListener('click', () => {
                sideNav.classList.toggle('hidden');
            });
        };
    }, []);

    return (
      <>
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img src={require("../assets/images/logo.png")} alt="Logo" className="w-28 h-18 mr-2" />
                    <input type="text" placeholder="Search here" className="bg-gray-100 outline-none flex-grow mr-2" />

                    <div className="flex">
                        <p className="font-bold text-xl mx-2">Notifications</p>
                        <p className="font-bold text-xl mx-2">Wallet</p>
                        <p className="font-bold text-xl mx-2">Enquiry</p>
                        <p className="font-bold text-xl mx-2">Settings</p>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button id="menuBtn">
                            <i className="fas fa-bars text-gray-500 text-lg"></i>
                        </button>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button id="menuBtn">
                        <i className="fas fa-bars text-gray-500 text-lg"></i>
                    </button>
                </div>
            </div>

            <div className="space-x-5">
                <button>
                    <i className="fas fa-bell text-gray-500 text-lg"></i>
                </button>
                <button>
                    <i className="fas fa-user text-gray-500 text-lg"></i>
                </button>
            </div>
        </div>

        <div className="flex-1 flex flex-wrap">
            <div className="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
                <nav>
                    <p className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                        <i className="fas fa-home mr-2"></i>Inicio
                    </p>
                    <p to="" className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                        <i className="fas fa-file-alt mr-2"></i>Autorizaciones
                    </p>
                    <p to="" className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                        <i className="fas fa-users mr-2"></i>Usuarios
                    </p>
                    <p to="" className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                        <i className="fas fa-store mr-2"></i>Comercios
                    </p>
                    <p to="/transactions" className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                        <i className="fas fa-exchange-alt mr-2"></i>Transacciones
                    </p>
                </nav>

                <p to="" className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto">
                    <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
                </p>

                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

                
            </div>

            <div className="flex-1 p-4 w-full md:w-1/2">
                <div className="relative max-w-md w-full">
                    <div className="absolute top-1 left-2 inline-flex items-center p-2">
                        <i className="fas fa-search text-gray-400"></i>
                    </div>
                    <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
                </div>

                <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div class="border rounded-lg overflow-hidden dark:border-neutral-700">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                      <thead class="bg-gray-50 dark:bg-neutral-700">
                        <tr>
                          <th scope="col" class="py-3 ps-4">
                            <div class="flex items-center h-5">
                              <input id="hs-table-checkbox-all" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                              <label for="hs-table-checkbox-all" class="sr-only">Checkbox</label>
                            </div>
                          </th>
                          <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Name</th>
                          <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Email</th>
                          <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Role</th>
                          <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                        <tr>
                          <td class="py-3 ps-4">
                            <div class="flex items-center h-5">
                              <input id="hs-table-checkbox-1" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                              <label for="hs-table-checkbox-1" class="sr-only">Checkbox</label>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">hi@who.com</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Admin</td>
                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Edit</button> &emsp;
                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                          </td>
                        </tr>

                        <tr>
                          <td class="py-3 ps-4">
                            <div class="flex items-center h-5">
                              <input id="hs-table-checkbox-2" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                              <label for="hs-table-checkbox-2" class="sr-only">Checkbox</label>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">Jim Green</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">27</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">London No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                          </td>
                        </tr>

                        <tr>
                          <td class="py-3 ps-4">
                            <div class="flex items-center h-5">
                              <input id="hs-table-checkbox-3" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                              <label for="hs-table-checkbox-3" class="sr-only">Checkbox</label>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">Joe Black</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Sidney No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                          </td>
                        </tr>

                        <tr>
                          <td class="py-3 ps-4">
                            <div class="flex items-center h-5">
                              <input id="hs-table-checkbox-4" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                              <label for="hs-table-checkbox-4" class="sr-only">Checkbox</label>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">Edward King</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">16</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">LA No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                          </td>
                        </tr>

                        <tr>
                          <td class="py-3 ps-4">
                            <div class="flex items-center h-5">
                              <input id="hs-table-checkbox-5" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                              <label for="hs-table-checkbox-5" class="sr-only">Checkbox</label>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">Jim Red</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Melbourne No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>  
              </div>    
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;
