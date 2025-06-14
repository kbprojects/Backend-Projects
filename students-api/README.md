# 🎓 Students API

RESTful API za upravljanje studentima i ispitima

## Funkcionalnosti

- Upravljanje studentima (kreiranje, prikaz, izmena, brisanje)
- Upravljanje ispitima (kreiranje, prikaz, izmena, brisanje)
- Obrada grešaka

---

## Tehnologije

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **ES6 Modules**
- **REST arhitektura**

---

## API Rute

### Studenti

| Metod  | Ruta                               | Opis                        |
| ------ | ---------------------------------- | --------------------------- |
| GET    | `/api/students`                    | Dohvatanje svih studenata   |
| GET    | `/api/students/:id`                | Dohvatanje studenta po ID-u |
| GET    | `/api/students/index/:indexNumber` | Dohvatanje po broju indeksa |
| POST   | `/api/students`                    | Kreiranje novog studenta    |
| PUT    | `/api/students/:id`                | Potpuna izmena studenta     |
| DELETE | `/api/students/:id`                | Brisanje studenta           |

### Ispiti

| Metod  | Ruta             | Opis                         |
| ------ | ---------------- | ---------------------------- |
| GET    | `/api/exams`     | Dohvatanje svih ispita       |
| GET    | `/api/exams/:id` | Dohvatanje ispita po ID-u    |
| POST   | `/api/exams`     | Kreiranje ispita za studenta |
| PUT    | `/api/exams/:id` | Potpuna izmena ispita        |
| DELETE | `/api/exams/:id` | Brisanje ispita              |

---

## Napomena

- `POST` zahtevi očekuju `Content-Type: application/json`
- Broj indeksa treba enkodovati u URL (npr. `2022/1234` → `2022%2F1234`)
- API spreman za lokalno testiranje putem Postman-a ili sličnog alata

```

```
