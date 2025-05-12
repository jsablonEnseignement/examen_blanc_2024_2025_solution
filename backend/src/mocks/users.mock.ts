export type User = {
    id: number;
    name: string;
    firstname: string;
    role: string;
  };
  
export let users: Array<User> = [
  { id: 1, firstname: "Lucas", name: "Morel", role: "utilisateur" },
  { id: 2, firstname: "Émilie", name: "Bernard", role: "administrateur" },
  { id: 3, firstname: "Nathan", name: "Lefèvre", role: "modérateur" },
  { id: 4, firstname: "Clara", name: "Dubois", role: "utilisateur" },
  { id: 5, firstname: "Julien", name: "Marchand", role: "modérateur" },
  { id: 6, firstname: "Sophie", name: "Lemoine", role: "utilisateur" },
  { id: 7, firstname: "Théo", name: "Caron", role: "administrateur" },
  { id: 8, firstname: "Camille", name: "Girard", role: "utilisateur" },
  { id: 9, firstname: "Romain", name: "Petit", role: "modérateur" },
  { id: 10, firstname: "Inès", name: "Fontaine", role: "administrateur" }
]