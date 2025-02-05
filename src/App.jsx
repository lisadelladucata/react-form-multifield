import { useState } from "react";
const initialblogData = [
  {
    id: 1,
    author: "Alice Conti",
    content:
      "In questo post, discuterò delle migliori pratiche per ottimizzare le performance di un'applicazione Node.js. Dalla gestione della memoria alla creazione di server più veloci, vediamo come migliorare l'efficienza del nostro codice.",
    selection: "BackEnd",
  },
  {
    id: 2,
    author: "Giovanni Rizzo",
    content:
      "Quando si sviluppa un'applicazione web, la gestione dei dati asincroni è cruciale. In questo articolo, esplorerò come utilizzare `async/await` in JavaScript per semplificare la gestione delle promesse e migliorare la leggibilità del codice.",
    selection: "FrontEnd",
  },
  {
    id: 3,
    author: "Marco Di Giacomo",
    content:
      "Nel post di oggi esploreremo le nuove funzionalità di JavaScript ES2025. La gestione degli array è migliorata notevolmente grazie a metodi come `at()` e `findLast()`. Andiamo a vedere come usarli con esempi pratici.",
    selection: "UI/UX",
  },
];

const initialFormData = {
  author: "",
  content: "",
  selection: "",
  check: true,
};

export default function App() {
  const [blogList, setBlogList] = useState(initialblogData);
  const [formData, setFormData] = useState(initialFormData);

  const handleFormField = (value, fieldName) => {
    setFormData((currentState) => ({
      ...currentState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: blogList[blogList.length - 1].id + 1,
      author: formData.author,
      content: formData.content,
      selection: formData.selection,
    };
    setBlogList((currentState) => [...currentState, newPost]);
    setFormData(initialFormData);
  };

  const handleDelete = (postId) => {
    setBlogList((currentState) =>
      currentState.filter((post) => post.id !== postId)
    );
  };

  return (
    <>
      <h1>Lista di post</h1>
      <ul>
        {blogList.map((post) => {
          return (
            <li key={post.id}>
              {post.author} | {post.content} | {post.selection}
              <button type="button" onClick={() => handleDelete(post.id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <h3>Aggiungi un prodotto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Nome dell'autore</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => {
              handleFormField(e.target.value, "author");
            }}
          />
        </div>
        <div>
          <label htmlFor="quantaty">Contenuto</label>
          <input
            id="quantity"
            type="text"
            value={formData.content}
            onChange={(e) => handleFormField(e.target.value, "content")}
          />
        </div>
        <div>
          <select
            name="selection"
            id="selection"
            value={formData.selection}
            onChange={(e) => handleFormField(e.target.value, "selection")}>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkbox">Pubblicato</label>
          <input
            type="checkbox"
            checked={formData.check}
            onChange={(e) => handleFormField(e.target.checked, "check")}
          />
        </div>
        <button type="submit">Invia</button>
      </form>
    </>
  );
}
