const express=require("express")
const { NoteModel } = require("../Model/notes.model")
const notes=express.Router()

/**
 * @swagger
 *
 * /create:
 *   post:
 *     summary: Create a new note
 *     description: Create a new note with a title and an author.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *             example:
 *               title: My Note
 *               author: John Doe
 *     responses:
 *       200:
 *         description: Note created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message indicating the note was created successfully
 *                   example: Notes added
 *       400:
 *         description: Bad request - request body is missing or invalid
 *       500:
 *         description: Internal server error
 */


notes.post("/create", async (req, res) => {
  try {
    const { title, author } = req.body;
    const note = new NoteModel(req.body);
    await note.save();
    res.json({ message: "notes added" }); // Return a JSON object
  } catch (error) {
    res.send(error);
  }
});

/**
 * @swagger
 *
 * /notes:
 *   get:
 *     summary: Get all notes for a specific author
 *     description: Get all notes created by a specific author, based on the authorId.
 *     parameters:
 *       - in: query
 *         name: authorId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the author to get notes for.
 *     responses:
 *       200:
 *         description: List of notes retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 *       400:
 *         description: Bad request - authorId parameter is missing or invalid
 *       500:
 *         description: Internal server error
 */

notes.get("/notes",async(req,res)=>{
    try {
        const note=await NoteModel.find({authorId:req.body.authorId})
        res.send(note)
    } catch (error) {
        res.send(error)
    }
})
/**
 * @swagger
 *
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note by ID
 *     description: Delete a note with the specified ID, as long as the note belongs to the author with the matching authorId.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the note to delete.
 *       - in: body
 *         name: authorId
 *         schema:
 *           type: object
 *           properties:
 *             authorId:
 *               type: string
 *         required: true
 *         description: The ID of the author that the note belongs to.
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the note was deleted successfully.
 *       404:
 *         description: Note not found or authorId is incorrect
 *       500:
 *         description: Internal server error
 */


notes.delete("/notes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { authorId } = req.body;
  
      // Check if the authorId matches the one in the note
      //because in our model the id is present with key _id and author is present with the same key authorId
      const note = await NoteModel.findOne({ _id: id, authorId });
  
      if (!note) {
        // If the note doesn't exist or the authorId is incorrect, send a 404 status
        return res.status(404).json({ error: "Note not found" });
      }
  
      // Delete the note and send a success response
      await NoteModel.findByIdAndDelete(id);
      res.send({ message: "Note deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  /**
 * @swagger
 *
 * /notes/{id}:
 *   patch:
 *     summary: Update a note by ID
 *     description: Update a note with the specified ID, as long as the note belongs to the author with the matching authorId.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the note to update.
 *       - in: body
 *         name: note
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             author:
 *               type: string
 *             content:
 *               type: string
 *             authorId:
 *               type: string
 *         required: true
 *         description: The updated note object.
 *     responses:
 *       200:
 *         description: Note updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: A message indicating that the note was updated successfully.
 *       404:
 *         description: Note not found or authorId is incorrect
 *       500:
 *         description: Internal server error
 */

notes.patch("/notes/:id",async(req,res)=>{
      try {
        const{id}=req.params
        const{authorId}=req.body
        const note=await NoteModel.findOne({_id:id,authorId})
     if(!note){
        res.json({msg:"Note not found"})
     }
     else{
        await NoteModel.findByIdAndUpdate(id,req.body)
        res.json({msg:"Note Updated"})
     }
    } catch (error) {
        res.json({msg:error})
    }
})

module.exports={
    notes
}