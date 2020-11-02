CREATE DATABASE IF NOT EXISTS db_lead;

USE db_lead;

CREATE TABLE IF NOT EXISTS tb_contact (
	cd_contact INT AUTO_INCREMENT,
    nm_first VARCHAR(30) NOT NULL,
    nm_last VARCHAR(30) NOT NULL,
    nm_email VARCHAR(100) NOT NULL,
    nr_phone varchar(15) NOT NULL,
    nm_country VARCHAR(30) NOT NULL,
    nm_language VARCHAR(30) NOT NULL,
    primary key (cd_contact)
)ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS tb_billing_address(
	cd_billing_address INT AUTO_INCREMENT,
    nm_billing_address1 VARCHAR(100) NOT NULL,
    nm_billing_address2 VARCHAR(100),
    nm_billing_city VARCHAR(100) NOT NULL,
    nm_billing_state VARCHAR(100) NOT NULL,
    nr_billing_zipcode INT(10) NOT NULL,
    id_contact INT NOT NULL,
    primary key (cd_billing_address),
    constraint fk_id_contact_billing foreign key (id_contact) references tb_contact (cd_contact)  
)ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS tb_shipping_address(
	cd_shipping_address INT AUTO_INCREMENT,
    nm_shipping_address1 VARCHAR(100) NOT NULL,
    nm_shipping_address2 VARCHAR(100),
    nm_shipping_city VARCHAR(100) NOT NULL,
    nm_shipping_state VARCHAR(100) NOT NULL,
    nr_shipping_zipcode INT(10) NOT NULL,
    id_contact INT NOT NULL,
	primary key (cd_shipping_address),
    constraint fk_id_contact_shipping foreign key (id_contact) references tb_contact (cd_contact)  
)ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS tb_additional_information(
	cd_additional_information INT AUTO_INCREMENT,
    info1 bool NOT NULL,
    info2 bool NOT NULL,
    info3 bool NOT NULL,  
    nr_trackers int not null,
    id_contact INT NOT NULL,
	primary key (cd_additional_information),
    constraint fk_id_contact_af foreign key (id_contact) references tb_contact (cd_contact)  
)ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

