<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '[l5yE8w~w(s,ha^2+~[|YsLh.&]*F2HjC (Ei)ziG.5JFChMw5kVfh%hXM+t]BO6' );
define( 'SECURE_AUTH_KEY',   '38#%V[[zUq]|:U02q;LQDI?,eQS~[=63+RL;k!&(S}f Xbsfmq<{L%w{iN~^#D}a' );
define( 'LOGGED_IN_KEY',     '^:KK_<Hr9A1,H032+h`$=HC3uSu!z`h>G4kr5~;{!Ix=JpXxjL><=n<&b[L8e*Zq' );
define( 'NONCE_KEY',         '_q knsITUOp40&q511q?J$A<*ljU,a^C4$jjM4O#@jwE;fK]@[ZRx6l*nOY=}!t(' );
define( 'AUTH_SALT',         '/qWapkDAWV-lk]P`rto;qy`J5&}$s3|F6qsTJ$S{8gUW=kvnLppjowW=*[>$_0o;' );
define( 'SECURE_AUTH_SALT',  '6J2oDx[Nt+#_a p*SvV)=V0yxdGt2tGLHq`|H59DCv_S}>i`*9dx8KhiXn}-3ny*' );
define( 'LOGGED_IN_SALT',    'hR)]$,K =?DNY7)$WG$eP&4!_X7_T`#Hjlt5J[9/+f`(sBJl0iuZr(wnB`zvqA7(' );
define( 'NONCE_SALT',        'cy9Wh;~lp)FGK;?<4C~5>5>L)gR/uKSiw;!3Dtazb3lD3Nq|}lMH[XPt}tL(RiI{' );
define( 'WP_CACHE_KEY_SALT', ']htjCoVl,XYp0=-!5CfLM+EsaMuJ6%vn^ Sbzv1NUw[j$/AG4livdu;(`Gn?d2n{' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
