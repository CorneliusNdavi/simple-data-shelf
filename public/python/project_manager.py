
#!/usr/bin/env python3
"""
Project Manager Script for Cornelius Ndavi's Data Science Portfolio

This script provides functionality to manage projects data for the portfolio.
It can be used to add, update, delete, and list projects.

Example Usage:
- Add a project:    python project_manager.py add --title "Project Title" --description "Project Description" --tags "Python,ML" --date "2023-06-01"
- Update a project: python project_manager.py update --id "1" --title "New Title"
- Delete a project: python project_manager.py delete --id "1"
- List projects:    python project_manager.py list
"""

import argparse
import json
import os
import sys
from datetime import datetime

# Path to the projects data file
DATA_FILE = os.path.join(os.path.dirname(__file__), "projects_data.json")

def load_projects():
    """Load projects from the JSON file."""
    if not os.path.exists(DATA_FILE):
        return []
    
    try:
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    except json.JSONDecodeError:
        print(f"Error: Could not parse {DATA_FILE}")
        return []

def save_projects(projects):
    """Save projects to the JSON file."""
    try:
        with open(DATA_FILE, 'w') as f:
            json.dump(projects, f, indent=2)
        return True
    except Exception as e:
        print(f"Error saving projects: {str(e)}")
        return False

def add_project(args):
    """Add a new project to the portfolio."""
    projects = load_projects()
    
    # Generate a new ID (use timestamp for simplicity)
    new_id = str(int(datetime.now().timestamp()))
    
    # Parse tags into a list
    tags = [tag.strip() for tag in args.tags.split(',')] if args.tags else []
    
    # Create the new project
    new_project = {
        "id": new_id,
        "title": args.title,
        "description": args.description,
        "tags": tags,
        "date": args.date or datetime.now().strftime('%Y-%m-%d'),
        "githubUrl": args.github_url,
        "liveUrl": args.live_url
    }
    
    # Add to projects list
    projects.append(new_project)
    
    # Save updated projects
    if save_projects(projects):
        print(f"Project '{args.title}' added successfully with ID: {new_id}")
        print(json.dumps(new_project, indent=2))
        return new_project
    else:
        print("Failed to add project")
        return None

def update_project(args):
    """Update an existing project."""
    projects = load_projects()
    
    # Find the project by ID
    for i, project in enumerate(projects):
        if project["id"] == args.id:
            # Update fields that were provided
            if args.title:
                project["title"] = args.title
            if args.description:
                project["description"] = args.description
            if args.tags:
                project["tags"] = [tag.strip() for tag in args.tags.split(',')]
            if args.date:
                project["date"] = args.date
            if args.github_url:
                project["githubUrl"] = args.github_url
            if args.live_url:
                project["liveUrl"] = args.live_url
            
            # Save updated projects
            if save_projects(projects):
                print(f"Project ID: {args.id} updated successfully")
                print(json.dumps(project, indent=2))
                return project
            else:
                print("Failed to update project")
                return None
    
    print(f"Error: Project with ID {args.id} not found")
    return None

def delete_project(args):
    """Delete a project by ID."""
    projects = load_projects()
    
    # Find the project by ID
    for i, project in enumerate(projects):
        if project["id"] == args.id:
            # Remove the project
            deleted_project = projects.pop(i)
            
            # Save updated projects
            if save_projects(projects):
                print(f"Project ID: {args.id} deleted successfully")
                return deleted_project
            else:
                print("Failed to delete project")
                return None
    
    print(f"Error: Project with ID {args.id} not found")
    return None

def list_projects(args):
    """List all projects."""
    projects = load_projects()
    
    if not projects:
        print("No projects found")
        return []
    
    print(f"Found {len(projects)} projects:")
    for project in projects:
        print(f"\nID: {project['id']}")
        print(f"Title: {project['title']}")
        print(f"Description: {project['description'][:50]}...")
        print(f"Tags: {', '.join(project['tags'])}")
        print(f"Date: {project['date']}")
    
    return projects

def main():
    """Main function to parse arguments and execute commands."""
    parser = argparse.ArgumentParser(description="Manage projects for Cornelius Ndavi's portfolio")
    subparsers = parser.add_subparsers(dest="command", help="Command to execute")
    
    # Add project command
    add_parser = subparsers.add_parser("add", help="Add a new project")
    add_parser.add_argument("--title", required=True, help="Project title")
    add_parser.add_argument("--description", required=True, help="Project description")
    add_parser.add_argument("--tags", help="Comma-separated list of tags")
    add_parser.add_argument("--date", help="Project date (YYYY-MM-DD)")
    add_parser.add_argument("--github-url", help="GitHub repository URL")
    add_parser.add_argument("--live-url", help="Live demo URL")
    
    # Update project command
    update_parser = subparsers.add_parser("update", help="Update an existing project")
    update_parser.add_argument("--id", required=True, help="Project ID to update")
    update_parser.add_argument("--title", help="New project title")
    update_parser.add_argument("--description", help="New project description")
    update_parser.add_argument("--tags", help="New comma-separated list of tags")
    update_parser.add_argument("--date", help="New project date (YYYY-MM-DD)")
    update_parser.add_argument("--github-url", help="New GitHub repository URL")
    update_parser.add_argument("--live-url", help="New live demo URL")
    
    # Delete project command
    delete_parser = subparsers.add_parser("delete", help="Delete a project")
    delete_parser.add_argument("--id", required=True, help="Project ID to delete")
    
    # List projects command
    list_parser = subparsers.add_parser("list", help="List all projects")
    
    # Parse arguments
    args = parser.parse_args()
    
    # Execute the appropriate command
    if args.command == "add":
        return add_project(args)
    elif args.command == "update":
        return update_project(args)
    elif args.command == "delete":
        return delete_project(args)
    elif args.command == "list":
        return list_projects(args)
    else:
        parser.print_help()
        return None

if __name__ == "__main__":
    main()
