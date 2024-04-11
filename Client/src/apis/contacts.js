import axios from "axios";
const API = import.meta.env.VITE_BASE_API;

/**
 * Fetches all contacts from the API.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of contact objects.
 * @throws {Error} If there's an error fetching the contacts.
 */
export const FetchContacts = () => {
  return axios
    .get(API + "/contact/list")
    .then((response) => {
      return response.data.contacts;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

/**
 * Fetches a contact by its ID from the API.
 *
 * @param {string} id - The ID of the contact to fetch.
 * @returns {Promise<Object>} A promise that resolves to the contact object.
 * @throws {Error} If there's an error fetching the contact.
 */
export const FetchContactById = (id) => {
  return axios
    .get(API + "/contact/findById?id=" + id)
    .then((response) => {
      return response.data.contact;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

/**
 * Updates a contact in the API.
 *
 * @param {Object} updatedContact - The updated contact object.
 * @returns {Promise<string>} A promise that resolves to a success message.
 * @throws {Error} If there's an error updating the contact.
 */
export const UpdateContact = (updatedContact) => {
  return axios
    .put(`${API}/contact/update`, updatedContact)
    .then((response) => {
      console.log(response.data.message);
      return response.data.message;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};


/**
 * Adds a new contact to the API.
 *
 * @param {Object} contact - The contact object to add.
 * @returns {Promise<string>} A promise that resolves to a success message.
 * @throws {Error} If there's an error adding the contact.
 */
export const AddContact = (contact) => {
  return axios
    .post(`${API}/contact/add`, contact)
    .then((response) => {
      console.log(response.data.message);
      return response.data.message;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

/**
 * Deletes a contact from the API.
 *
 * @param {string} id - The ID of the contact to delete.
 * @returns {Promise<string>} A promise that resolves to a success message.
 * @throws {Error} If there's an error deleting the contact.
 */
export const DeleteContact = (id) => {
  return axios
    .delete(API + "/contact/delete?id=" + id)
    .then((response) => {
      console.log(response.data.message);
      return response.data.message;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
