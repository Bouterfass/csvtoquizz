import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CancelPopOver() {
    let [isOpen, setIsOpen] = useState(false)
    let navigate = useNavigate();


    const handleContinue = () => {
        setIsOpen(false);
    }

    const handleLeave = () => {
        setIsOpen(false)
        localStorage.removeItem('score');
        navigate('/')
    }

    const open = () => setIsOpen(true)
    return (
        <>
            <Button
                onClick={open}
                className="rounded-md bg-black/20 py-2 px-4 text-sm font-small text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
            >
                abandonner
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={handleLeave} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                Abandon
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-white/50">
                                Êtes-vous sûr de vouloir quitter le test. Vos réponses enregistrées jusqu'ici seront supprimées.
                            </p>
                            <div className="mt-4 flex justify-end gap-2">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={handleContinue}
                                >
                                    je continue!
                                </Button>
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={handleLeave}
                                >
                                    je quitte.
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
