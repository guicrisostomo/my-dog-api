import pool from "../config/database";

export const getIpConfig = async (req: any, res: any) => {
  const response = await pool.query("SELECT * FROM ip_config");
  res.status(200).json(response.rows);
};

export const createIpConfig = async (req: { body: { ip: any; }; }, res: { json: (arg0: { message: string; body: { ip: { ip: any; }; }; }) => void; }) => {
  const { ip } = req.body;
  
  await pool.query(
    "INSERT INTO ip_config (ip) VALUES ($1)",
    [ip]
  );
  res.json({
    message: "IpConfig Added successfully",
    body: {
      ip: { ip },
    },
  });
};

export const updateIpConfig = async (req: { params: { id: string; }; body: { ip: any }; }, res: { json: (arg0: string) => void; }) => {
  const id = req.params.id;
  const { ip } = req.body;

  await pool.query(
    "UPDATE ip_config SET ip = $1 WHERE id = $2",
    [ip, id]
  );
  res.json("IpConfig Updated Successfully");
};