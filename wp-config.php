<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

/** ATTENTION! - The following values are used in the initialization of the container.
* You must only provide VALID values and avoid the usage of quotation marks */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bitnami_wordpress' );

/** MySQL database username */
define( 'DB_USER', 'bn_wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'mariadb:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

// append offload setting
// define( 'AS3CF_SETTINGS', serialize( array('provider' => 'gcp','key-file-path' => '/Users/alexw/google-storage-keys/j3ang-wuxt-blog-5d3d56688fbd.json',)));
// define( 'AS3CF_SETTINGS', serialize( array('provider' => 'gcp','key-file-path' => '/bitnami/j3ang-wuxt-blog-5d3d56688fbd.json',)));
// define( 'AS3CF_SETTINGS', serialize( array(
//     'provider' => 'gcp',
//     'key-file-path' => '/Users/alexw/google-storage-keys/j3ang-wuxt-blog-5d3d56688fbd.json',
// ) ) );
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9IRmXCzSysAzna6nxuaQxz2a945GSxh6' );
define( 'SECURE_AUTH_KEY',  'ZdSbsKVb9PE5qA3dFJkwZnGMJIiynKmp' );
define( 'LOGGED_IN_KEY',    'e3aqFg6ArjW7YfSRsHvoiesdr0Udjp1v' );
define( 'NONCE_KEY',        'rKTigU09CPoYDC82qcAwoPaaDyKjF0QW' );
define( 'AUTH_SALT',        'ONVY589bpF2LNslrjox85ZbRPwYkhYVJ' );
define( 'SECURE_AUTH_SALT', 'kWsZJ9yjU37OpGFMCEArsVZxtL9jEdfe' );
define( 'LOGGED_IN_SALT',   'Q8C3SVG5j64NcMcctCbMhK66HVjPrOi3' );
define( 'NONCE_SALT',       'rye4SIKux6qtlbPnHjJHNLzRbWoTwvxE' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

define('WP_PLUGIN_DIR', '/bitnami/wordpress' . '/wp-content/plugins');
//offload setting
define( 'AS3CF_SETTINGS', serialize( array('provider' => 'gcp','key-file-path' => '/Users/alexw/google-storage-keys/j3ang-wuxt-blog-5d3d56688fbd.json',)));
/* That's all, stop editing! Happy publishing. */


if ( defined( 'WP_CLI' ) ) {
  $_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/');
define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/');
define('FS_METHOD', 'direct');
/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {
	define('ABSPATH', '/opt/bitnami/wordpress' . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define('WP_TEMP_DIR', '/opt/bitnami/wordpress/tmp');

if ( !defined( 'WP_CLI' ) ) {
//  Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
//  More info at: https://wiki.bitnami.com/Applications/Bitnami_WordPress#XMLRPC_and_Pingback

// remove x-pingback HTTP header
add_filter("wp_headers", function($headers) {
            unset($headers["X-Pingback"]);
            return $headers;
           });
// disable pingbacks
add_filter( "xmlrpc_methods", function( $methods ) {
             unset( $methods["pingback.ping"] );
             return $methods;
           });
}


