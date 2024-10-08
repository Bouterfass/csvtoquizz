import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


interface DataItem {
    column: string;
    column_two: string;
}

interface SettingsProps {
    closeSet: () => void;
    data: Array<DataItem>;
}
 
const Settings = ({ closeSet, data }: SettingsProps) => {

    const [open, setOpen] = useState<boolean>(true);
    console.log("salam", data);
    

    const handleClosing = () => {
        setOpen(false);
        closeSet(); // Appel de la fonction pour fermer le composant Settings dans App
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Vocabulary
                                    </DialogTitle>
                                    <table className="mt-2">
                                        <tbody className="text-sm overflow-y-auto h-80 text-gray-500 flex flex-col overflow-hidden">
                                          {data && data.map((arr, index) => {
                                            
                                            return <tr className="flex flex-row text-midnight" key={index}>
                                                <td scope="row" className="p-2 w-1/2 border-solid border-2 border-black">{arr['column']}</td>
                                                <td scope="row" className="p-2 w-1/2 border-solid border-2 border-black">{arr['column_two']}</td>
                                            </tr>
                                          })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                start
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={handleClosing}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>

        </Dialog>
    )


}










export default Settings;