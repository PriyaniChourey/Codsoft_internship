const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
require('dotenv').config();

app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-form-idea.mwmri.mongodb.net/?retryWrites=true&w=majority&appName=Job-form-idea`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    const db = client.db("Job-portals");
    const jobsCollections = db.collection("jobPlatform");

    // Post job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();
      const result = await jobsCollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Cannot Insert",
          status: false,
        });
      }
    });

    // Get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollections.find({}).toArray();
      res.send(jobs);
    });

    // Get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      const jobs = await jobsCollections.find({ postedBy: req.params.email }).toArray();
      res.send(jobs);
    });

    // Delete job by ID
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobsCollections.deleteOne(filter);
      res.send(result);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run();

app.get('/', (req, res) => {
  res.send('Hello, this is Priyani Job Portal!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// No need to close the client in run function, let it stay connected
// Optionally handle shutdown gracefully if needed
