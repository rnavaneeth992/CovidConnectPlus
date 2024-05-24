import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';

function EditContact() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const AllContact = useSelector((store) => store.contacts);
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    function handleSave() {
        dispatch(editContact({ id, ...form }));
    }

    useEffect(() => {
        const contact = AllContact.find((el) => el.id == id);
        if (contact) setForm(contact);
    }, [id, AllContact]);

    return (
        <div className="max-w-md mx-auto m-10 p-10 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">
                Edit Contact
            </h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="mob">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="mob"
                    type="number"
                    name="mob"
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <button
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}

export default EditContact;