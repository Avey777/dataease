package io.dataease.plugins.datasource.dm.query;



import io.dataease.plugins.common.constants.datasource.SQLConstants;


public class MaxConstants extends SQLConstants {

    public static final String KEYWORD_TABLE =  "%s" ;

    public static final String KEYWORD_FIX = "%s." + "%s";

    public static final String ALIAS_FIX = "%s";
    public static final String UNIX_TIMESTAMP = "TO_MILLIS(%s)";

    public static final String DATE_FORMAT = "to_char(%s, '%s')";

    public static final String FROM_UNIXTIME = "from_unixtime(%s)";

    public static final String CAST = "CAST(%s AS %s)";

    public static final String TO_DATE = "to_date(%s, '%s')";

    public static final String DEFAULT_DATE_FORMAT = "YYYY-MM-DD HH24:MI:SS";

    public static final String DEFAULT_INT_FORMAT = "bigint";

    public static final String DEFAULT_FLOAT_FORMAT = "DOUBLE";

    public static final String WHERE_VALUE_NULL = "(NULL,'')";

    public static final String WHERE_VALUE_VALUE = "'%s'";

    public static final String AGG_COUNT = "COUNT(*)";

    public static final String AGG_FIELD = "%s(%s)";

    public static final String WHERE_BETWEEN = "'%s' AND '%s'";

    public static final String BRACKETS = "(%s)";

    public static final String NAME = "maxcompute";


}
