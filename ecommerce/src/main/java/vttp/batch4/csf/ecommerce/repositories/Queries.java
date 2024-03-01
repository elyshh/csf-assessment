package vttp.batch4.csf.ecommerce.repositories;

public class Queries {
    
    public static final String SQL_INSERT_ORDER = """
            insert into orders(name, address, priority, comments)
                values
                    (?, ?, ?, ?);
            """;
}
