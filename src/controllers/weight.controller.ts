import pool from "../config/database";

export const getWeight = async (req: any, res: any) => {
  const response = await pool.query("SELECT * FROM weight");
  res.status(200).json(response.rows);
};

export const updateWeight = async (req: { params: { id: string; }; body: { weight: any; }; }, res: { json: (arg0: string) => void; }) => {
  const id = req.params.id;
  const { weight } = req.body;

  await pool.query(
    "UPDATE weight SET weight = $1 WHERE id = $2",
    [weight, id]
  );
  res.json("Weight Updated Successfully");
};