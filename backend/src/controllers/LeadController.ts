import { Request, Response} from 'express';
import db_connection from '../database/db_connection';
import Query from '../database/Query';
import { IBodyRegisterLead } from '../types';

export default {
  async store(req: Request, res: Response){
    
    const body: IBodyRegisterLead = req.body;
    let result: any;

    let sql = `
      INSERT INTO tb_contact (nm_first, nm_last, nm_email, nr_phone, nm_country, nm_language)
      VALUES  (
      '${body.contact.firstName}',
      '${body.contact.lastName}', 
      '${body.contact.email}',
      '${body.contact.phone}', 
      '${body.contact.country}', 
      '${body.contact.language}')
    `;
    
    try{
      result = await Query(sql);
    }catch (error){
      // res.status(404).json({err: error.code});
      res.status(404).json({error});
      return
    }
    
    sql = `INSERT INTO tb_billing_address (nm_billing_address1, nm_billing_address2, nm_billing_city, nm_billing_state, nr_billing_zipcode, id_contact ) 
    VALUES (
      '${body.billingAddress.addressLine1}',
      '${body.billingAddress.addressLine2}',
      '${body.billingAddress.city}',
      '${body.billingAddress.state}',
      '${body.billingAddress.zipCode}',
      ${result.insertId}
    )`
    
    try{
      await Query(sql);
    }catch (error){
      // res.status(404).json({err: error.code});
      res.status(404).json({error});
      return
    }
    
    sql = `INSERT INTO tb_shipping_address (nm_shipping_address1, nm_shipping_address2, nm_shipping_city, nm_shipping_state, nr_shipping_zipcode, id_contact ) 
    VALUES (
      '${body.shippingAddress.addressLine1}',
      '${body.shippingAddress.addressLine2}',
      '${body.shippingAddress.city}',
      '${body.shippingAddress.state}',
      '${body.shippingAddress.zipCode}',
      ${result.insertId}
    )`

    try{
      await Query(sql);
    }catch (error){
      // res.status(404).json({err: error.code});
      res.status(404).json({error});
      return
    }
   
    sql = `INSERT INTO tb_additional_information ( info1, info2, info3, nr_trackers, id_contact) 
    VALUES (
      '${body.additionalInformation.info1}',
      '${body.additionalInformation.info2}',
      '${body.additionalInformation.info3}',
      '${body.additionalInformation.trackers}',
      ${result.insertId}
    )`
    
    try{
      await Query(sql);
    }catch (error){
      // res.status(404).json({err: error.code});
      res.status(404).json({error});
      return
    }
   
    res.json({success: "Lead successfully registered"})
  },
  async index(req: Request, res: Response){
    let result: any;
    let sql = "select * from tb_contact"
    try{
      result = await Query(sql);
      res.json(result);
    }catch (error){
      // res.status(404).json({err: error.code});
      res.status(404).json({error});
      return
    }
    
  }

} 