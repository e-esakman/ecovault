import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SocialScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: 'Sarah Johnson', avatar: 'S', color: '#10b981' },
      time: '2h',
      content: 'Just planted 5 trees in the local park! 🌳 Every tree counts for our planet 🌍',
      image: require('../assets/tree_plantation.jpg'),
      likes: 24,
      comments: 8,
      liked: false,
    },
    {
      id: 2,
      user: { name: 'Mike Chen', avatar: 'M', color: '#3b82f6' },
      time: '4h',
      content: 'Amazing beach cleanup today! Collected 50+ plastic bottles 🏖️ #SaveOurOceans',
      image: require('../assets/ocean_cleanup.jpg'),
      likes: 42,
      comments: 15,
      liked: false,
    },
    {
      id: 3,
      user: { name: 'Emma Davis', avatar: 'E', color: '#f59e0b' },
      time: '6h',
      content: 'Week 3 of biking to work! 🚲 Saved 15kg of CO₂ emissions so far. Small changes, big impact! 💚',
      likes: 18,
      comments: 5,
      liked: false,
    },
  ]);

  const likePost = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const renderPost = (post) => (
    <View key={post.id} style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={[styles.userAvatar, { backgroundColor: post.user.color }]}>
          <Text style={styles.avatarText}>{post.user.avatar}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.user.name}</Text>
          <Text style={styles.postTime}>{post.time}</Text>
        </View>
      </View>

      <View style={styles.postContent}>
        {post.image && (
          <View style={styles.postImageContainer}>
            <Image source={post.image} style={styles.postImage} />
          </View>
        )}
        <Text style={styles.postText}>{post.content}</Text>
      </View>

      <View style={styles.postActions}>
        <TouchableOpacity
          style={styles.postAction}
          onPress={() => likePost(post.id)}
        >
          <Text style={styles.actionIcon}>
            {post.liked ? '❤️' : '🤍'}
          </Text>
          <Text style={styles.actionCount}>{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postAction}>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionCount}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postAction}>
          <Text style={styles.actionIcon}>📤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>For You</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>➕</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        {posts.map(renderPost)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonText: {
    fontSize: 18,
  },
  feed: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  postCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  postTime: {
    fontSize: 14,
    color: '#6b7280',
  },
  postContent: {
    marginBottom: 12,
  },
  postImageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  postText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1f2937',
  },
  postActions: {
    flexDirection: 'row',
    gap: 24,
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionIcon: {
    fontSize: 20,
  },
  actionCount: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
});

export default SocialScreen;