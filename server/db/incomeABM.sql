CREATE PROCEDURE `incomeABM`(
	IN _id INT,
    IN _concept VARCHAR(45),
    IN _amount INT,
    IN _date VARCHAR(20),
    IN _type VARCHAR(45)
)
BEGIN
	IF _id = 0 THEN
		INSERT INTO income (concept, amount, date, type)
        VALUES (_concept, _amount, _date, _type);
        SET _id = last_insert_id();
	ELSE
		UPDATE income
        SET
			concept = _concept,
            amount = _amount,
            date = _date
            WHERE id = _id;
	END IF;

    SELECT _id AS id;
END
